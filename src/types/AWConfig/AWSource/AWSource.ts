import { castToArrayOfType, castToType } from '../../../utilites/cast'
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
    files: (object: any) => castToArrayOfType(object, FileInfo),
    thumbnail: (object: any) => castToType(object, ImageInfo)
  }
}
