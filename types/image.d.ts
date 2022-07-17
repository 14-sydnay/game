declare module '*.jpg'
declare module '*.png' {
  const imageSrc: string
  export default imageSrc
}
declare module '*.jpeg'
declare module '*.gif'
declare module '*.mp3' {
  const audioSrc: string
  export default audioSrc
}
