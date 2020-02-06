import { AWSourceVisual } from './AWSourceVisual'

export class AWSourceVideo extends AWSourceVisual {
  loop = true
  dataRate: number | null = null
  codec: string | null = null
  audioTracksCount: number | null = null
  videoTracksCount = 1

  constructor (type?: string) {
    super(type || 'video')
  }

  static from (object: { [p: string]: any }): AWSourceVideo {
    const o = new AWSourceVideo()
    Object.keys(o).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      o[key] = object[key]
    })
    return Object.assign(o, AWSourceVisual.from(object))
  }
}
