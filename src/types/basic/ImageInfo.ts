import { Resolution } from './Resolution'

export class ImageInfo {
  url = ''
  type = ''
  resolution: Resolution | null = null
  file?: File

  constructor (file?: File, url?: string, resolution?: Resolution) {
    if (file) {
      this.type = file.type
      this.file = file
    }
    if (url) this.url = url
    if (resolution) this.resolution = resolution
  }

  static from (object: {[key: string]: any}): ImageInfo {
    const im = new ImageInfo()
    im.url = object.url || ''
    im.type = object.type || ''
    im.resolution = Resolution.from(object.resolution)
    return im
  }
}
