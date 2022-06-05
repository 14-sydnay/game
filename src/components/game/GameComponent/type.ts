import { FC } from 'react';

export type PlayerStatus = 'lose' | 'win';

export type EndOfGameEvent = {
  playerStatus: PlayerStatus;
};

export type OwnProps = {
  onEndOfGame: (e: EndOfGameEvent) => void;
};
export type Props = FC<OwnProps>;
