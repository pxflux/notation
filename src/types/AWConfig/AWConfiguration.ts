import { ArrayOfType } from '../../utilites/ArrayOfType'
import { AWChannel } from './AWChannel'

export class AWConfiguration {
  [key: string]: any

  id = ''
  title = ''
  channels: AWChannel[] = []
  preview = []
  iterations = []
  setup: null // description of physical sizes, placement in space, etc.
  order = 0 // sort order in UI

  constructor (id?: string) {
    if (id) {
      this.id = id
      this.channels = [new AWChannel()]
    }
  }

  static from (object: { [p: string]: any }): AWConfiguration {
    const o = new AWConfiguration()
    Object.keys(o).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      switch (key) {
        case 'channels':
          o.channels = ArrayOfType.from(object.channels, AWChannel)
          break
        case 'preview':
        default:
          o[key] = object[key]
      }
    })
    return o
  }
}
