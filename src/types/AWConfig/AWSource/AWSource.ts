import { castToArrayOfType, castToType } from '../../../utilites/cast'
import { ImageInfo } from '../../basic/ImageInfo'
import { FileInfo } from '../../basic/FileInfo'
import { AWSourceHtml } from './AWSourceHtml'
import { AWSourceVideo } from './AWSourceVideo'
import { AWSourceVimeo } from './AWSourceVimeo'
import { AWSourceVisual } from './AWSourceVisual'
import { AWSourceAudio } from './AWSourceAudio'

export class AWSource {

  url = ''
  type = ''
  version = ''
  local = false
  files: FileInfo[] = []
  size = 0
  duration = 0
  fps = 0
  thumbnail: ImageInfo | null = null

  constructor (type?: string) {
    if (type) this.type = type
  }

  static from (object: {[p: string]: any}): AWSource {
    switch (object.type) {
      case 'html': return castToType(object, AWSourceHtml)
      case 'video': return castToType(object, AWSourceVideo)
      case 'vimeo': return castToType(object, AWSourceVimeo)
      case 'image': return castToType(object, AWSourceVisual)
      case 'audio': return castToType(object, AWSourceAudio)
      default: return castToType(object, AWSource)
    }
  }

  static propFactory = {
    files: (object: any) => {
      if (typeof object === 'object' && object !== null) {
        const a = Array.isArray(object) ? object : Object.values(object)
        return a.map(item => FileInfo.from(item))
      }
    },
    thumbnail: (object: any) => castToType(object, ImageInfo)
  }
}
