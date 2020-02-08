import { AWSource } from './AWSource'

export class AWSourceAudio extends AWSource {

  loop = true
  dataRate = 0
  codec = ''
  audioTracksCount = 0

  constructor () {
    super('audio')
  }

  static propFactory = {
    ...AWSource.propFactory
  }
}
