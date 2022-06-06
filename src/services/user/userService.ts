import { userApi } from 'Api/user'
//import { apiHasError } from 'Api/utils'

export const changePassword = async (oldPassword: string, newPassword: string) => {
  await userApi.changePassword({ oldPassword, newPassword })
  // todo add loading
  //const response = await userApi.changePassword(data)

  /*   if (apiHasError(response)) {
    AppStore.dispatch({ isLoading: false, formError: response.reason })
    return
  } */
}
