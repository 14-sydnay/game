import { BufferSource } from 'stream/web'

export default class AudioPlayer {
  play(audioFilePath: string): void {
    const audio = document.createElement('audio')
    const mediaSource = new MediaSource()

    mediaSource.addEventListener('sourceopen', function () {
      const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg')

      function onAudioLoaded(data: BufferSource) {
        // Append the ArrayBuffer data into our new SourceBuffer.
        sourceBuffer.appendBuffer(data)
      }

      // Retrieve an audio segment via XHR.  For simplicity, we're retrieving the
      // entire segment at once, but we could also retrieve it in chunks and append
      // each chunk separately.  MSE will take care of assembling the pieces.
      /* GET('sintel/sintel_0.mp3', function (data) {
        onAudioLoaded(data, 0)
      }) */
      fetch(audioFilePath)
        .then((res: Response) => {
          const reader = res.body!.getReader()
          return reader.read()
        })
        .then((data) => {
          onAudioLoaded(data.value as BufferSource)
          return
        })
        .catch(() => {
          console.log('Error load sound')
        })
    })

    audio.src = URL.createObjectURL(mediaSource)
    return
  }
}
