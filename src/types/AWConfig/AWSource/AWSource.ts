import { ArrayOfType } from '../../../utilites/ArrayOfType'
import { ImageInfo } from '../../basic/ImageInfo'
import { FileInfo } from '../../basic/FileInfo'

export class AWSource {
  [key: string]: any

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

  static from (object: {[key: string]: any}) {
    const source = new AWSource()
    Object.keys(source).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      switch (key) {
        case 'files':
          source.files = ArrayOfType.from(object.files, FileInfo)
          break
        case 'thumbnail':
          source.thumbnail = ImageInfo.from(object.thumbnail)
          break
        default:
          source[key] = object[key]
      }
    })
    return source
  }
}
