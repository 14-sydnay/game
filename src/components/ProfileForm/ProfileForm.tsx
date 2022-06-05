import './ProfileForm.css';
import React, { FC, useState } from 'react';
import { ChangeAvatar } from 'Components/ChangeAvatar';
import { Props } from './type';

export const ProfileForm: FC<Props> = ({ user }) => {
  const [firstName, setFirstName] = useState<string | undefined>(
    user.firstName
  );
  const [secondName, setSecondName] = useState<string | undefined>(
    user.secondName
  );
  const [displayName, setDisplayName] = useState<string | undefined>(
    user.displayName
  );
  const [email, setEmail] = useState<string | undefined>(user.email);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const name = target.name;
    switch (name) {
      case 'firstName':
        setFirstName(target.value);
        break;
      case 'secondName':
        setSecondName(target.value);
        break;
      case 'displayName':
        setDisplayName(target.value);
        break;
      case 'email':
        setEmail(target.value);
        break;
    }
  };
  return (
    <>
      <ChangeAvatar url={user.avatar} />
      <form onSubmit={handleSubmit} className="profile">
        <label>
          Имя:
          <input
            type="text"
            value={firstName}
            onChange={handleInputChange}
            name="first_name"
          ></input>
        </label>
        <label>
          Фамилия:
          <input
            type="text"
            value={secondName}
            onChange={handleInputChange}
            name="second_name"
          ></input>
        </label>
        <label>
          Имя в игре:
          <input
            type="text"
            value={displayName}
            onChange={handleInputChange}
            name="display_name"
          ></input>
        </label>
        <label>
          Почта:
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            name="email"
          ></input>
        </label>
        <input type="submit" value="Сохранить" />
      </form>
    </>
  );
};
