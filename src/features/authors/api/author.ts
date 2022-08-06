import { AxiosResponse } from 'axios'

import { AuthorResponse } from './types'
import createApi from 'api/api'
import { getUrl } from 'src/client/utils'

const apiInstance = createApi(getUrl(`/api/v1/authors`))

export const authorsApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAuthors: (): Promise<AxiosResponse<AuthorResponse, any>> =>
    apiInstance.get<AuthorResponse>('/'),
}
