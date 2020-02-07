import closestStandardForResolution from '../../utilites/standard-resolutions'

export class Resolution {

  w = 0
  h = 0

  toString () {
    const std = closestStandardForResolution(this)
    return std?.abr || `${this.w}px x ${this.h}px`
  }
}
