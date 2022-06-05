import { authApi, transformUser } from 'Api/auth';
import { apiHasError } from 'Api/utils';

export const login = async (login: string, password: string) => {
  const responseLogin = await authApi.login({ login, password });

  if (apiHasError(responseLogin)) {
    alert(`Ошибка аутентификации: ${responseLogin.reason}`);
    return;
  }

  const responseUser = await authApi.getCurrentUser();

  if (apiHasError(responseUser.data)) {
    logout();
    return;
  }
  const user = transformUser(responseUser.data);
  console.log(user);
};

export const logout = async () => {
  await authApi.logout();
};

/* export const register = async (data: RegisterDataDto) => {
  await authApi.register(data);
  const responseUser = await authApi.getCurrentUser();
}; */
