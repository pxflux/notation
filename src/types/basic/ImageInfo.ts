import { castToType } from '../../utilites/cast'
import { Resolution } from './Resolution'

export class ImageInfo {

  url = ''
  type = ''
  resolution: Resolution | null = null
  file?: File

  static propFactory = {
    resolution: (object: any) => castToType(object, Resolution)
  }

  static fromFile (file: File, url?: string, resolution?: Resolution): ImageInfo {
    const im = new ImageInfo()
    im.type = file.type
    im.file = file
    if (url) im.url = url
    if (resolution) {
      im.resolution = ImageInfo.propFactory.resolution(resolution)
    }
    return im
  }
}
