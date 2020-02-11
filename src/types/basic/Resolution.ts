import closestStandardForResolution from '../../utilites/standard-resolutions'
import { castToType } from '../../utilites/cast'

export class Resolution {

  w = 0
  h = 0

  static from (object: Resolution): Resolution {
    return castToType(object, Resolution)
  }

  toString () {
    const std = closestStandardForResolution(this)
    return std?.abr || `${this.w}px x ${this.h}px`
  }
}
