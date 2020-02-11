import { simpleId } from '../../../utilites/simpleId'
import { Resolution } from '../../basic/Resolution'

export enum videoOutputType {
  Any = 'any',
  Monitor = 'monitor',
  Projection = 'projection',
  Handheld = 'handheld',
  Headset = 'headset'
}

export enum videoOutputOrientation {
  Portrait = 'portrait',
  Landscape = 'landscape'
}

export class AWOutputVideo {

  id = ''
  type = videoOutputType.Any
  resolution: Resolution | null = null
  orientation = videoOutputOrientation.Landscape
  order = 0

  constructor (id?: string) {
    if (id) {
      this.id = id
    }
  }

  static preset (): AWOutputVideo {
    return new AWOutputVideo(simpleId())
  }
}
