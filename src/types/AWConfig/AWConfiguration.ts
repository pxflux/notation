import { simpleId } from '../../utilites/simpleId'
import { castToArrayOfType, castToType } from '../../utilites/cast'
import { AWChannel } from './AWChannel'

export class AWConfiguration {

  id = ''
  title = ''
  channels: AWChannel[] = []
  preview = []
  iterations = []
  setup = null // description of elements physical sizes, placement in space, etc.
  order = 0   // sort order in UI

  constructor (id?: string) {
    if (id) {
      this.id = id
      this.channels = [new AWChannel(simpleId())]
    }
  }

  static from (object: any): AWConfiguration {
    return castToType(object, AWConfiguration)
  }

  static preset (): AWConfiguration {
    return new AWConfiguration(simpleId())
  }

  static propFactory = {
    channels: (object: any) => castToArrayOfType(object, AWChannel)
  }
}
