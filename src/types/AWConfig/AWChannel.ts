import { simpleId } from '../../utilites/simpleId'
import { castToType } from '../../utilites/cast'
import { AWSource } from './AWSource/AWSource'
import { AWSourceHtml } from './AWSource/AWSourceHtml'
import { AWSourceVisual } from './AWSource/AWSourceVisual'
import { AWSourceAudio } from './AWSource/AWSourceAudio'
import { AWSourceVideo } from './AWSource/AWSourceVideo'
import { AWSourceVimeo } from './AWSource/AWSourceVimeo'

export class AWChannel {

  id = ''
  source: AWSource | null = null
  outputs = {
    audio: null,
    video: null
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
    source: (object: any) => getSourceByType(object),
    outputs: (object: any) => {
      // TODO: make real outputs
      return {
        audio: null,
        video: null
      }
    },
    // TODO: make real setup
    setup: (object: any) => null
  }
}

function getSourceByType (object: { type: string }):
  AWSource | AWSourceHtml | AWSourceVideo | AWSourceVimeo | AWSourceVisual | AWSourceAudio {
  switch (object.type) {
    case 'html': return castToType(object, AWSourceHtml)
    case 'video': return castToType(object, AWSourceVideo)
    case 'vimeo': return castToType(object, AWSourceVimeo)
    case 'image': return castToType(object, AWSourceVisual)
    case 'audio': return castToType(object, AWSourceAudio)
    default: return castToType(object, AWSource)
  }
}
