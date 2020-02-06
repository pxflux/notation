import closestStandardForResolution from '../../utilites/standard-resolutions'

export class Resolution {
  w: number
  h: number

  constructor (w: number | string, h: number | string) {
    const iw = parseInt(w as string, 10)
    const ih = parseInt(h as string, 10)
    this.w = Number.isInteger(iw) ? iw : 0
    this.h = Number.isInteger(ih) ? ih : 0
  }

  static from (object: object) {
    return new Resolution(
      (object as Resolution).w,
      (object as Resolution).h
    )
  }

  toString () {
    const std = closestStandardForResolution(this)
    return std?.abr || `${this.w}px x ${this.h}px`
  }
}
