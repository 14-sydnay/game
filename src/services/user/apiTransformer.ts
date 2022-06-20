import { ProfileData } from './types'
import { ProfileDto } from 'api/types'

export const transformProfileToDto = (data: ProfileData): ProfileDto => {
  return {
    login: data.login,
    first_name: data.firstName,
    second_name: data.secondName,
    display_name: data.displayName,
    email: data.email,
    phone: data.phone,
  }
}
