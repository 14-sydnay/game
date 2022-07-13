import { createImageAsync, KeysContoller } from '.'
import AudioPlayer from './AudioPlayer'
import AudioPlayer2 from './AudioPlayer'
import GameElement from './GameElement'
import MotionStrategy from './MotionStrategy'
import MovableGameElement from './MovableGameElement'
import Platform from './Platform'
import Player from './Player'
import Scene from './Scene'
import SimpleMotionStrategy from './SimpleMotionStrategy'
import PlayerSkin, { PlayerIdleSpriteSkin, PlayerRunSpriteSkin } from './Skin'
//import spriteCharacterJumpSrc from 'Assets/images/character/spriteJump.png'
import bgSoundSrc from 'assets/audios/bg_sound.mp3'
import smallCloud1Src from 'assets/images/background/clouds/128x128/cloud_1.png'
import smallCloud2Src from 'assets/images/background/clouds/128x128/cloud_2.png'
import bigCloud1Src from 'assets/images/background/clouds/256x256/cloud_1.png'
import bigCloud2Src from 'assets/images/background/clouds/256x256/cloud_2.png'
import hillsSrc from 'assets/images/background/hills.png'
import skySrc from 'assets/images/background/sky.png'
import spriteCharacterIdleSrc from 'assets/images/character/spriteIdleBlink.png'
import spriteCharacterRunSrc from 'assets/images/character/spriteRun.png'
import platformSrc from 'assets/images/platform/dirt.png'
import groundSrc from 'assets/images/platform/grassMid.png'
import {
  EndOfGameEvent,
  PlayerStatus,
} from 'components/game/GameComponent/type'
import { EventBus } from 'modules/eventBus'

export default class Game extends EventBus {
  private _render: CanvasRenderingContext2D

  private _player!: Player

  private _platforms: Platform[] = []

  private _groundTiles: MovableGameElement[] = []

  private _scrollOffset = 0

  private _scene: Scene

  private _sky!: GameElement

  private _hills!: GameElement

  private _frontClouds: MovableGameElement[] = []

  private _backClouds: MovableGameElement[] = []

  private _playerSpeed = 10

  private _gravity = 0.5

  private _moveLeft = false

  private _moveRight = false

  private _moveUp = false

  private _moveDown = false

  private _handleEndOfGame: (e: EndOfGameEvent) => void // todo временно тут

  private _keysController: KeysContoller

  constructor(
    scene: Scene,
    render: CanvasRenderingContext2D,
    keysController: KeysContoller,
    handleEndOfGame: (e: EndOfGameEvent) => void // todo временно тут
  ) {
    super()
    this._render = render
    this._scene = scene
    this._keysController = keysController
    this._handleEndOfGame = handleEndOfGame
    this._registerListeners(this._keysController)
    //this.init()
  }

  async init(): Promise<void> {
    await this.makeBackground()
    await this.makeClouds()
    await this.makeGround()
    await this.makePlatforms()
    await this.makePlayer(this._keysController)
  }

  private _registerListeners(keysController: KeysContoller) {
    keysController.on(KeysContoller.EVENTS.MOVE_RIGHT, (eventArg) => {
      this._moveRight = eventArg as boolean
    })
    keysController.on(KeysContoller.EVENTS.MOVE_LEFT, (eventArg) => {
      this._moveLeft = eventArg as boolean
    })
    keysController.on(KeysContoller.EVENTS.MOVE_DOWN, (eventArg) => {
      this._moveDown = eventArg as boolean
    })
    keysController.on(KeysContoller.EVENTS.MOVE_UP, (eventArg) => {
      this._moveUp = eventArg as boolean
    })
  }

  private async makeBackground() {
    this._sky = new GameElement({ x: 0, y: 0 }, await createImageAsync(skySrc))
    this._hills = new GameElement(
      { x: 0, y: 0 },
      await createImageAsync(hillsSrc)
    )
  }

  private async makePlayer(keysController: KeysContoller) {
    const playerMotionStrategy = new MotionStrategy(
      this._scene,
      this._gravity,
      this._playerSpeed,
      15
    )

    const idleSkin = new PlayerIdleSpriteSkin(
      await createImageAsync(spriteCharacterIdleSrc),
      72,
      56,
      173,
      147,
      173,
      147
    )

    const runSkin = new PlayerRunSpriteSkin(
      await createImageAsync(spriteCharacterRunSrc),
      54,
      37,
      85,
      80,
      173,
      147
    )
    const skin = new PlayerSkin(idleSkin, runSkin)
    skin.registerListeners(keysController)
    this._player = new Player(
      {
        x: 100,
        y: 100,
      },
      skin,
      playerMotionStrategy
    )
  }

  private async makeClouds() {
    const frontCloudMotionStrategy = new SimpleMotionStrategy(
      this._playerSpeed * 0.33,
      0
    )
    const backCloudMotionStrategy = new SimpleMotionStrategy(
      this._playerSpeed * 0.66,
      0
    )

    this._frontClouds = [
      new MovableGameElement(
        { x: 100, y: 100 },
        await createImageAsync(bigCloud1Src),
        frontCloudMotionStrategy
      ),
      new MovableGameElement(
        { x: 850, y: 30 },
        await createImageAsync(bigCloud2Src),
        frontCloudMotionStrategy
      ),
      new MovableGameElement(
        { x: 1500, y: 120 },
        await createImageAsync(bigCloud1Src),
        frontCloudMotionStrategy
      ),
    ]

    this._backClouds = [
      new MovableGameElement(
        { x: 550, y: 70 },
        await createImageAsync(smallCloud1Src),
        backCloudMotionStrategy
      ),
      new MovableGameElement(
        { x: 1250, y: 30 },
        await createImageAsync(smallCloud2Src),
        backCloudMotionStrategy
      ),
    ]
  }

  private async makeGround() {
    const motionStrategy = new SimpleMotionStrategy(10, 0)
    const groundTileImg = await createImageAsync(groundSrc)

    for (let i = -3; i < 10; i++) {
      if (i == 5 || i == 8) continue // создаем колодцы

      this._groundTiles.push(
        new MovableGameElement(
          {
            x: groundTileImg.width * i,
            y: this._scene.height - groundTileImg.height,
          },
          groundTileImg,
          motionStrategy
        )
      )
    }
  }

  private async makePlatforms() {
    const motionStrategy = new SimpleMotionStrategy(this._playerSpeed, 0)
    const platformImg = await createImageAsync(platformSrc)

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
    ]
  }

  async start(): Promise<void> {
    await this.init()
    const player = new AudioPlayer2()
    await player.play(bgSoundSrc)
    this.on('stop', () => {
      player.destroy()
    })
    this.animate()
  }

  stop(playerStatus: PlayerStatus): void {
    const audioElements = document.querySelectorAll('audio')
    audioElements.forEach((audioElement) => {
      audioElement.remove()
    })
    this._handleEndOfGame({ playerStatus })
    this.emit('stop')
    //await this.restart()
  }

  async restart(): Promise<void> {
    this._keysController.reset()
    await this.init()
  }

  private drawBackground() {
    this._sky.draw(this._render)
    this._hills.draw(this._render)
    this._backClouds.forEach((cloud) => cloud.draw(this._render))
    this._frontClouds.forEach((cloud) => cloud.draw(this._render))
  }

  private drawGroundTiles() {
    this._groundTiles.forEach((tile) => tile.draw(this._render))
  }

  private drawPlatforms() {
    this._platforms.forEach((platform) => platform.draw(this._render))
  }

  private drawPlayer() {
    this._player.update(this._render)
  }

  private updatePlayerPosition(): boolean {
    if (this._moveRight && this._player.left < 400) {
      this._player.moveForward()
      return true
    } else if (this._moveLeft && this._player.left > 100) {
      this._player.moveBack()
      return true
    } else if (this._moveUp) {
      this._player.moveUp()
      return true
    } else if (this._moveDown) {
      this._player.moveDown()
      return true
    } else {
      this._player.stop()
      return false
    }
  }

  private updateCloudsPosition() {
    if (this._moveRight) {
      this._frontClouds.forEach((cloud) => cloud.moveBack())
      this._backClouds.forEach((cloud) => cloud.moveBack())
    } else if (this._moveLeft) {
      this._frontClouds.forEach((cloud) => cloud.moveForward())
      this._backClouds.forEach((cloud) => cloud.moveForward())
    }
  }

  private updateGrounTilesPosition() {
    if (this._moveRight) {
      this._groundTiles.forEach((tile) => tile.moveBack())
    } else if (this._moveLeft) {
      this._groundTiles.forEach((tile) => tile.moveForward())
    }
  }

  private updatePlatformsPosition() {
    if (this._moveRight) {
      this._scrollOffset += this._playerSpeed
      this._platforms.forEach(
        (platform) => (platform.position.x -= this._playerSpeed)
      )
    } else if (this._moveLeft) {
      this._scrollOffset -= this._playerSpeed
      this._platforms.forEach(
        (platform) => (platform.position.x += this._playerSpeed)
      )
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
        this._player.velocity.y = 0
    })
  }

  private collisionDetectWithGround() {
    this._groundTiles.forEach((tile) => {
      if (
        this._player.bottom <= tile.top &&
        this._player.bottom + this._player.velocity.y >= tile.top &&
        this._player.right >= tile.left &&
        this._player.left <= tile.right
      )
        this._player.velocity.y = 0
    })
  }

  private animate = () => {
    const requestId = requestAnimationFrame(this.animate)
    this.drawBackground()
    this.drawGroundTiles()
    this.drawPlatforms()
    this.drawPlayer()

    if (!this.updatePlayerPosition()) {
      this.updatePlatformsPosition()
      this.updateCloudsPosition()
      this.updateGrounTilesPosition()
    }

    this.collisionDetectWithPlatforms()

    this.collisionDetectWithGround()

    if (this._scrollOffset > 2000) {
      this.stop('win')
      cancelAnimationFrame(requestId)
    }
    if (this._player.top > this._scene.height) {
      this.stop('lose')
      cancelAnimationFrame(requestId)
    }
  }
}
