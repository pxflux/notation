import { simpleId } from '../../utilites/simpleId'
import { castToArrayOfType } from '../../utilites/cast'
import { AWChannel } from './AWChannel'

export class AWConfiguration {

  id = ''
  title = ''
  channels = [new AWChannel(simpleId())]
  preview = []
  iterations = []
  setup = null // description of elements physical sizes, placement in space, etc.
  order = 0   // sort order in UI

  constructor (id?: string) {
    if (id) this.id = id
  }

  static propFactory = {
    channels: (object: any) => castToArrayOfType(object, AWChannel)
  }
}
