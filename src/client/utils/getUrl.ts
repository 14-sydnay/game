import isServer from './isServer'

const getUrl = (url: string): string => {
  if (isServer) {
    return `http://localhost:${process.env.PORT || 3000}${url}`
  } else {
    return url
  }
}

export default getUrl
