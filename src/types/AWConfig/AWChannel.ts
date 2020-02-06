import { AWSource } from './AWSource/AWSource'
import { AWSourceHtml } from './AWSource/AWSourceHtml'
import { AWSourceVisual } from './AWSource/AWSourceVisual'
import { AWSourceAudio } from './AWSource/AWSourceAudio'
import { AWSourceVideo } from './AWSource/AWSourceVideo'
import { AWSourceVimeo } from './AWSource/AWSourceVimeo'

export class AWChannel {
  [key: string]: any

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

  static from (object: { [p: string]: any }): AWChannel {
    const o = new AWChannel()
    Object.keys(o).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      switch (key) {
        case 'source':
          o.source = getSourceByType(object)
          break
        case 'outputs':
          o.outputs.audio = null
          o.outputs.video = null
          break
        default:
          o[key] = object[key]
      }
    })
    return o
  }
}

function getSourceByType (object: { [p: string]: any }):
  AWSource | AWSourceHtml | AWSourceVideo | AWSourceVimeo | AWSourceVisual | AWSourceAudio {
  switch (object.type) {
    case 'html': return AWSourceHtml.from(object)
    case 'video': return AWSourceVideo.from(object)
    case 'vimeo': return AWSourceVimeo.from(object)
    case 'image': return AWSourceVisual.from(object)
    case 'audio': return AWSourceAudio.from(object)
    default: return AWSource.from(object)
  }
}
