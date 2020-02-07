import { ImageInfo } from '../../basic/ImageInfo'
import { FileInfo } from '../../basic/FileInfo'
import { castToArrayOfType, castToType } from '../../../utilites/cast'

export class AWSource {

  url = ''
  type = ''
  version = ''
  local = false
  files: FileInfo[] = []
  size = 0
  duration: number | null = null
  fps: number | null = null
  thumbnail: ImageInfo | null = null

  constructor (type?: string) {
    if (type) this.type = type
  }

  static propFactory = {
    files: (object: any) => castToArrayOfType(object, FileInfo),
    thumbnail: (object: any) => castToType(object, ImageInfo)
  }
}
