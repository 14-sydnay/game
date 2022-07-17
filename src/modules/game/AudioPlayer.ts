export default class AudioPlayer2 {
  private audioElement: HTMLAudioElement

  private mediaSource: MediaSource

  constructor() {
    this.audioElement = document.createElement('audio')
    this.mediaSource = new MediaSource()
    this.audioElement.src = URL.createObjectURL(this.mediaSource)
  }

  public async play(src: string): Promise<void> {
    const audioBlob = await (await fetch(src)).blob()
    const audioBuff = await audioBlob.arrayBuffer()
    const sourceBuffer = await new Promise<SourceBuffer>((resolve, reject) => {
      const getSourceBuffer = () => {
        try {
          const buffer = this.mediaSource.addSourceBuffer('audio/mpeg')
          resolve(buffer)
        } catch (e) {
          reject(e)
        }
      }
      if (this.mediaSource.readyState === 'open') {
        getSourceBuffer()
      } else {
        this.mediaSource.addEventListener('sourceopen', getSourceBuffer)
      }
    })

    sourceBuffer.appendBuffer(audioBuff)

    sourceBuffer.onupdateend = async () => {
      this.mediaSource.endOfStream()
      await this.audioElement.play()
    }
  }

  public destroy(): void {
    this.mediaSource.removeSourceBuffer(this.mediaSource.sourceBuffers[0])
    this.audioElement.remove()
  }
}
