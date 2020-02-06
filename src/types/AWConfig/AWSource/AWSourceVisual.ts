import { AWSource } from './AWSource'
import { Resolution } from '../../basic/Resolution'

export class AWSourceVisual extends AWSource {
  [key: string]: any

  resolution: Resolution | null = null
  pixelAspectRatio: number | null = null
  colorDepth: number | null = null
  colorProfile: string | null = null

  constructor (type?: string) {
    super(type)
  }

  static from (object: { [p: string]: any }): AWSourceVisual {
    const o = new AWSourceVisual()
    Object.keys(o).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      if (key === 'resolution') {
        o.resolution = Resolution.from(object.resolution)
      } else {
        o[key] = object[key]
      }
    })
    return Object.assign(o, AWSource.from(object))
  }
}
