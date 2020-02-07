import { AWChannel } from './AWChannel'
import { castToArrayOfType } from '../../utilites/cast'
import simpleId from '../../utilites/simpleId'

export class AWConfiguration {

  id = ''
  title = ''
  channels: AWChannel[] = []
  preview = []
  iterations = []
  setup: null // description of elements physical sizes, placement in space, etc.
  order = 0   // sort order in UI

  constructor (id?: string) {
    if (id) {
      this.id = id
      this.channels = [new AWChannel(simpleId())]
    }
  }

  static propFactory = {
    channels: (object: any) => castToArrayOfType(object, AWChannel)
  }
}
