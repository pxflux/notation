import { castToType } from './cast'
import { AWSource } from '../types/AWConfig/AWSource/AWSource'
import { AWSourceHtml } from '../types/AWConfig/AWSource/AWSourceHtml'
import { AWSourceVideo } from '../types/AWConfig/AWSource/AWSourceVideo'
import { AWSourceVimeo } from '../types/AWConfig/AWSource/AWSourceVimeo'
import { AWSourceVisual } from '../types/AWConfig/AWSource/AWSourceVisual'
import { AWSourceAudio } from '../types/AWConfig/AWSource/AWSourceAudio'

export function sourceByType (object: {[p: string]: any}): AWSource {
  switch (object.type) {
    case 'html': return castToType(object, AWSourceHtml)
    case 'video': return castToType(object, AWSourceVideo)
    case 'vimeo': return castToType(object, AWSourceVimeo)
    case 'image': return castToType(object, AWSourceVisual)
    case 'audio': return castToType(object, AWSourceAudio)
    default: return castToType(object, AWSource)
  }
}
