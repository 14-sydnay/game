import Platform from './Platform';
import Player from './Player';
import Scene from './Scene';
import GameElement from './GameElement';
import MovableGameElement from './MovableGameElement';
import MotionStrategy from './MotionStrategy';
import SimpleMotionStrategy from './SimpleMotionStrategy';
import { createImage, KeysContoller } from '.';

import groundSrc from 'Assets/img/platform/grassMid.png';
import skySrc from 'Assets/img/background/sky.png';
import bigCloud1Src from 'Assets/img/background/clouds/256x256/cloud_1.png';
import bigCloud2Src from 'Assets/img/background/clouds/256x256/cloud_2.png';
import smallCloud1Src from 'Assets/img/background/clouds/128x128/cloud_1.png';
import smallCloud2Src from 'Assets/img/background/clouds/128x128/cloud_2.png';
import hillsSrc from 'Assets/img/background/hills.png';
import characterSrc from 'Assets/img/character/character.png';
import platformSrc from 'Assets/img/platform/dirt.png';

import {
  EndOfGameEvent,
  PlayerStatus,
} from 'components/game/GameComponent/type';

export default class Game {
  private _render: CanvasRenderingContext2D;
  private _player!: Player;
  private _platforms: Platform[] = [];
  private _groundTiles: MovableGameElement[] = [];
  private _scrollOffset = 0;
  private _scene: Scene;
  private _sky!: GameElement;
  private _hills!: GameElement;
  private _frontClouds: MovableGameElement[] = [];
  private _backClouds: MovableGameElement[] = [];
  private _playerSpeed = 10;
  private _gravity = 0.5;
  private _moveLeft: boolean = false;
  private _moveRight: boolean = false;
  private _moveUp: boolean = false;
  private _moveDown: boolean = false;

  private _handleEndOfGame: (e: EndOfGameEvent) => void; // todo временно тут
  constructor(
    scene: Scene,
    render: CanvasRenderingContext2D,
    keysController: KeysContoller,
    handleEndOfGame: (e: EndOfGameEvent) => void // todo временно тут
  ) {
    this._render = render;
    this._scene = scene;
    this._handleEndOfGame = handleEndOfGame;
    this._registerListeners(keysController);
    this.init();
  }
  init() {
    this.makeBackground();
    this.makeClouds();
    this.makeGround();
    this.makePlatforms();
    this.makePlayer();
  }

  private _registerListeners(keysController: KeysContoller) {
    keysController.on(KeysContoller.EVENTS.MOVE_RIGHT, (eventArg) => {
      this._moveRight = eventArg as boolean;
    });
    keysController.on(KeysContoller.EVENTS.MOVE_LEFT, (eventArg) => {
      this._moveLeft = eventArg as boolean;
    });
    keysController.on(KeysContoller.EVENTS.MOVE_DOWN, (eventArg) => {
      this._moveDown = eventArg as boolean;
    });
    keysController.on(KeysContoller.EVENTS.MOVE_UP, (eventArg) => {
      this._moveUp = eventArg as boolean;
    });
  }

  private makeBackground() {
    this._sky = new GameElement({ x: 0, y: 0 }, createImage(skySrc));
    this._hills = new GameElement({ x: 0, y: 0 }, createImage(hillsSrc));
  }

  private makePlayer() {
    const playerMotionStrategy = new MotionStrategy(
      this._scene,
      this._gravity,
      this._playerSpeed,
      15
    );

    this._player = new Player(
      {
        x: 100,
        y: 100,
      },
      createImage(characterSrc),
      playerMotionStrategy
    );
  }

  private makeClouds() {
    const frontCloudMotionStrategy = new SimpleMotionStrategy(
      this._playerSpeed * 0.33,
      0
    );
    const backCloudMotionStrategy = new SimpleMotionStrategy(
      this._playerSpeed * 0.66,
      0
    );
    this._sky = new GameElement({ x: 0, y: 0 }, createImage(skySrc));
    this._frontClouds = [
      new MovableGameElement(
        { x: 100, y: 100 },
        createImage(bigCloud1Src),
        frontCloudMotionStrategy
      ),
      new MovableGameElement(
        { x: 850, y: 30 },
        createImage(bigCloud2Src),
        frontCloudMotionStrategy
      ),
      new MovableGameElement(
        { x: 1500, y: 120 },
        createImage(bigCloud1Src),
        frontCloudMotionStrategy
      ),
    ];

    this._backClouds = [
      new MovableGameElement(
        { x: 550, y: 70 },
        createImage(smallCloud1Src),
        backCloudMotionStrategy
      ),
      new MovableGameElement(
        { x: 1250, y: 30 },
        createImage(smallCloud2Src),
        backCloudMotionStrategy
      ),
    ];
  }

  private makeGround() {
    const motionStrategy = new SimpleMotionStrategy(3, 0);
    const groundTileImg = createImage(groundSrc);

    for (let i = -3; i < 10; i++) {
      if (i == 5 || i == 8) continue; // создаем колодцы

      this._groundTiles.push(
        new MovableGameElement(
          {
            x: groundTileImg.width * i,
            y: this._scene.height - groundTileImg.height,
          },
          groundTileImg,
          motionStrategy
        )
      );
    }
  }

  private makePlatforms() {
    const motionStrategy = new SimpleMotionStrategy(this._playerSpeed, 0);
    const platformImg = createImage(platformSrc);

    this._platforms = [
      new MovableGameElement(
        {
          x: 500,
          y: this._scene.height - 500,
        },
        platformImg,
        motionStrategy
      ),
      new MovableGameElement(
        {
          x: 900,
          y: this._scene.height - 800,
        },
        platformImg,
        motionStrategy
      ),
      new MovableGameElement(
        {
          x: 1300,
          y: this._scene.height - 700,
        },
        platformImg,
        motionStrategy
      ),
    ];
  }

  start() {
    this.animate();
  }

  stop(playerStatus: PlayerStatus) {
    this._handleEndOfGame({ playerStatus });
    this.restart();
  }

  restart() {
    this.init();
  }

  private drawBackground() {
    this._sky.draw(this._render);
    this._hills.draw(this._render);
    this._backClouds.forEach((cloud) => cloud.draw(this._render));
    this._frontClouds.forEach((cloud) => cloud.draw(this._render));
  }

  private drawGroundTiles() {
    this._groundTiles.forEach((tile) => tile.draw(this._render));
  }

  private drawPlatforms() {
    this._platforms.forEach((platform) => platform.draw(this._render));
  }

  private drawPlayer() {
    this._player.update(this._render);
  }

  private updatePlayerPosition(): boolean {
    if (this._moveRight && this._player.left < 400) {
      this._player.moveForward();
      return true;
    } else if (this._moveLeft && this._player.left > 100) {
      this._player.moveBack();
      return true;
    } else if (this._moveUp) {
      this._player.moveUp();
      return true;
    } else if (this._moveDown) {
      this._player.moveDown();
      return true;
    } else {
      this._player.stop();
      return false;
    }
  }

  private updateCloudsPosition() {
    if (this._moveRight) {
      this._frontClouds.forEach((cloud) => cloud.moveBack());
      this._backClouds.forEach((cloud) => cloud.moveBack());
    } else if (this._moveLeft) {
      this._frontClouds.forEach((cloud) => cloud.moveForward());
      this._backClouds.forEach((cloud) => cloud.moveForward());
    }
  }

  private updateGrounTilesPosition() {
    if (this._moveRight) {
      this._groundTiles.forEach((tile) => tile.moveBack());
    } else if (this._moveLeft) {
      this._groundTiles.forEach((tile) => tile.moveForward());
    }
  }

  private updatePlatformsPosition() {
    if (this._moveRight) {
      this._scrollOffset += this._playerSpeed;
      this._platforms.forEach(
        (platform) => (platform.position.x -= this._playerSpeed)
      );
    } else if (this._moveLeft) {
      this._scrollOffset -= this._playerSpeed;
      this._platforms.forEach(
        (platform) => (platform.position.x += this._playerSpeed)
      );
    }
  }

  private collisionDetectWithPlatforms() {
    this._platforms.forEach((platform) => {
      if (
        this._player.bottom <= platform.top &&
        this._player.bottom + this._player.velocity.y >= platform.top &&
        this._player.right >= platform.left &&
        this._player.left <= platform.right
      )
        this._player.velocity.y = 0;
    });
  }

  private collisionDetectWithGround() {
    this._groundTiles.forEach((tile) => {
      if (
        this._player.bottom <= tile.top &&
        this._player.bottom + this._player.velocity.y >= tile.top &&
        this._player.right >= tile.left &&
        this._player.left <= tile.right
      )
        this._player.velocity.y = 0;
    });
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    this.drawBackground();
    this.drawGroundTiles();
    this.drawPlatforms();
    this.drawPlayer();

    if (!this.updatePlayerPosition()) {
      this.updatePlatformsPosition();
      this.updateCloudsPosition();
      this.updateGrounTilesPosition();
    }

    this.collisionDetectWithPlatforms();

    this.collisionDetectWithGround();

    if (this._scrollOffset > 3500) {
      this.stop('win');
    }
    if (this._player.top > this._scene.height) {
      this.stop('lose');
    }
  };
}