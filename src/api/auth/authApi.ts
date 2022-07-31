import createApi from 'api/api'

const apiInstance = createApi(`/api/v1/auth`)

export const authApi = {
  signin: () => apiInstance.post('signin'),

  signout: () => apiInstance.post('signout'),
}
