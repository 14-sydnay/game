import React, { FC } from 'react';

import { Props } from './type';

export const Avatar: FC<Props> = ({ url }) => {
  const img = url ? (
    <img className="" src={url}></img>
  ) : (
    <img
      className=""
      src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
    ></img>
  );
  return <figure className="">{img}</figure>;
};
