import { AuthorDto } from '../api'
import { Author } from '../models/author'

export const transformToAuthor = (data: AuthorDto[]): Author[] => {
  return data.map((dto) => ({
    id: dto.id,
    userId: dto.userId,
    name: dto.name,
    avatarUrl: dto.avatarUrl,
  }))
}
