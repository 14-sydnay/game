import './ChangePasswordPage.css';
import React, { useState } from 'react';

const ChangePasswordPage: React.FC = () => {
  const [oldPassword, setOldPassword] = useState<string | undefined>(undefined);
  const [newPassword, setNewPassword] = useState<string | undefined>(undefined);

  const handleSubmit = (event: React.FormEvent) => {
    console.log(oldPassword, newPassword);

    event.preventDefault();
  };

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const name = target.name;
    switch (name) {
      case 'oldPassword':
        setOldPassword(target.value);
        break;
      case 'newPassword':
        setNewPassword(target.value);
        break;
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit} className="">
        <label>
          Старый пароль:
          <input
            type="password"
            value={oldPassword}
            onChange={handleInputChange}
            name="oldPassword"
          ></input>
        </label>
        <label>
          Новый пароль:
          <input
            type="password"
            value={newPassword}
            onChange={handleInputChange}
            name="newPassword"
          ></input>
        </label>
        <input type="submit" value="Сохранить" />
      </form>
    </main>
  );
};
export default ChangePasswordPage;
