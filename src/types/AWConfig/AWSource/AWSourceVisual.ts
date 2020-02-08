import { castToType } from '../../../utilites/cast'
import { AWSource } from './AWSource'
import { Resolution } from '../../basic/Resolution'

export class AWSourceVisual extends AWSource {

  resolution: Resolution | null = null
  pixelAspectRatio = 0
  colorDepth = 0
  colorProfile = ''

  constructor (type?: string) {
    super(type)
  }

  static propFactory = {
    ...AWSource.propFactory,
    resolution: (object: any) => castToType(object, Resolution)
  }
}
