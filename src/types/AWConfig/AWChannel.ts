import { AWSource } from './AWSource/AWSource'
import { AWSourceHtml } from './AWSource/AWSourceHtml'
import { AWSourceVisual } from './AWSource/AWSourceVisual'
import { AWSourceAudio } from './AWSource/AWSourceAudio'
import { AWSourceVideo } from './AWSource/AWSourceVideo'
import { AWSourceVimeo } from './AWSource/AWSourceVimeo'
import { castToType } from '../../utilites/cast'

export class AWChannel {

  id = ''
  source: AWSource | null = null
  outputs = {
    audio: null,
    video: null
  }
  setup: null // description of physical sizes, placement in space, etc.
  order = 0 // sort order in UI

  constructor (id?: string) {
    if (id) this.id = id
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
    setup: (object: any) => null
  }
}

function getSourceByType (object: { [p: string]: any }):
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
