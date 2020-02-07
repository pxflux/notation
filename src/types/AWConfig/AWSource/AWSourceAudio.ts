import { AWSource } from './AWSource'

export class AWSourceAudio extends AWSource {

  loop = true
  dataRate: number | null = null
  codec: string | null = null
  audioTracksCount: number | null = null

  constructor () {
    super('audio')
  }

  static propFactory = {
    ...AWSource.propFactory
  }
}
