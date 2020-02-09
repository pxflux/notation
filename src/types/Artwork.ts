import { simpleId } from '../utilites/simpleId'
import { castToArrayOfType, castToType } from '../utilites/cast'
import { Contributor } from './Contributor'
import { AWConfiguration } from './AWConfig/AWConfiguration'

export class Artwork {

  id = ''
  title = ''
  published = false
  credits: Contributor[] = []
  year = 0
  description = ''
  configurations: AWConfiguration[] = []
  controls = []
  stats = null

  static preset (): Artwork {
    const w = new Artwork()
    w.configurations = [new AWConfiguration(simpleId())]
    return w
  }

  static from (object: any): Artwork {
    return castToType(object, Artwork)
  }

  static propFactory = {
    credits: (object: any) => castToArrayOfType(object, Contributor),
    configurations: (object: any) => castToArrayOfType(object, AWConfiguration)
  }
}
