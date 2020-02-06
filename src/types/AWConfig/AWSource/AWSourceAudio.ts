import { AWSource } from './AWSource'

export class AWSourceAudio extends AWSource {
  loop = true
  dataRate: number | null = null
  codec: string | null = null
  audioTracksCount: number | null = null

  static from (object: { [p: string]: any }): AWSourceAudio {
    const o = new AWSourceAudio()
    Object.keys(o).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      o[key] = object[key]
    })
    return Object.assign(o, AWSource.from(object))
  }
}
