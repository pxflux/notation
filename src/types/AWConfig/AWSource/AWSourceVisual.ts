import { AWSource } from './AWSource'
import { Resolution } from '../../basic/Resolution'
import { castToType } from '../../../utilites/cast'

export class AWSourceVisual extends AWSource {

  resolution: Resolution | null = null
  pixelAspectRatio: number | null = null
  colorDepth: number | null = null
  colorProfile: string | null = null

  constructor (type?: string) {
    super(type)
  }

  static propFactory = {
    ...AWSource.propFactory,
    resolution: (object: any) => castToType(object, Resolution)
  }
}
