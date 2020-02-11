import { simpleId } from '../../utilites/simpleId'
import { castToArrayOfType, castToType } from '../../utilites/cast'
import { sourceByType } from '../../utilites/source-by-type'
import { AWSource } from './AWSource/AWSource'
import { AWOutputVideo } from './AWOutputs/AWOutputVideo'
import { AWOutputAudio } from './AWOutputs/AWOutputAudio'

export class AWChannel {

  id = ''
  source: AWSource | null = null
  outputs: {audio: AWOutputAudio[], video: AWOutputVideo[]} = {
    audio: [],
    video: []
  }
  setup: null // description of physical sizes, placement in space, etc.
  order = 0   // sort order in UI

  constructor (id?: string) {
    if (id) {
      this.id = id
      this.source = new AWSource()
    }
  }

  static from (object: any): AWChannel {
    return castToType(object, AWChannel)
  }

  static preset (): AWChannel {
    return new AWChannel(simpleId())
  }

  static propFactory = {
    source: (object: any) => sourceByType(object),
    outputs: (object: any) => {
      return {
        audio: object.audio ? castToArrayOfType(object.audio, AWOutputAudio) : [],
        video: object.video ? castToArrayOfType(object.video, AWOutputVideo) : []
      }
    },
    // TODO: make real setup
    setup: (object: any) => null
  }
}
