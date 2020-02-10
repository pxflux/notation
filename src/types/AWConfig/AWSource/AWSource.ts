import { castToType } from '../../../utilites/cast'
import { ImageInfo } from '../../basic/ImageInfo'
import { FileInfo } from '../../basic/FileInfo'

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
