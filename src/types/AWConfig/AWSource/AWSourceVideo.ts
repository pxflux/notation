import { AWSourceVisual } from './AWSourceVisual'

export class AWSourceVideo extends AWSourceVisual {

  loop = true
  dataRate = 0
  codec = ''
  audioTracksCount = 0
  videoTracksCount = 0

  constructor (type?: string) {
    super(type || 'video')
  }

  static propFactory = {
    ...AWSourceVisual.propFactory
  }
}
