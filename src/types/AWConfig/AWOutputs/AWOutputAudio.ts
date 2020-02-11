import { simpleId } from '../../../utilites/simpleId'

export enum audioOutputType {
  Any = 'any',
  Speaker = 'speaker',
  Headphones = 'headphones'
}

export class AWOutputAudio {

  id = ''
  type = audioOutputType.Any
  numberChannels = 0
  order = 0

  constructor (id?: string) {
    if (id) {
      this.id = id
      this.numberChannels = 1
    }
  }

  static preset (): AWOutputAudio {
    return new AWOutputAudio(simpleId())
  }
}
