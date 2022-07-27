import { AuthorDto, authorsApi } from '../api'
import { Author } from '../models/author'
import { transformToAuthor } from './apiTransformer'
import { apiHasServerError } from 'api/utils'

export const getAuthors = async (): Promise<Author[]> => {
  const response = (await authorsApi.getAuthors()).data

  if (apiHasServerError(response)) {
    throw new Error(response.message)
  }

  return transformToAuthor(response as AuthorDto[])
}
