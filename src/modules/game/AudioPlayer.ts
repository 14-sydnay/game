export default class AudioPlayer {
  private audio: HTMLAudioElement

  constructor() {
    this.audio = document.createElement('audio')
  }

  public play(src: string): void {
    this.audio.src = src
    this.audio.play()
    document.getElementById('root')?.appendChild(this.audio)
  }
}
