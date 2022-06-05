import React, { FC } from 'react';
import { Avatar } from 'Components/Avatar';
import { Props } from './type';

export const ChangeAvatar: FC<Props> = ({ url }) => {
  const handleClick = () => {
    alert('еще не готово');
  };
  return (
    <>
      <Avatar url={url}></Avatar>
      <button onClick={handleClick}>Изменить</button>
    </>
  );
};
