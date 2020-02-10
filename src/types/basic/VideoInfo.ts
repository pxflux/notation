import { castToType } from '../../utilites/cast'
import { ImageInfo } from './ImageInfo'

export class VideoInfo extends ImageInfo {

  duration = 0

  static from (object: any): VideoInfo {
    return castToType(object, VideoInfo)
  }

  static propFactory = {
    ...ImageInfo.propFactory
  }
}
