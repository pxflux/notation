import { castToType } from '../../utilites/cast'
import { Resolution } from './Resolution'

export class ImageInfo {

  url = ''
  resolution: Resolution | null = null
  file?: File

  static from (object: any): ImageInfo {
    return castToType(object, ImageInfo)
  }

  static propFactory = {
    resolution: (object: any) => castToType(object, Resolution),
    file: (file: File | any) => { if (file instanceof File) return file }
  }
}
