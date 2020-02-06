import { ArrayOfType } from '../utilites/ArrayOfType'
import { Contributor } from './Contributor'
import { AWConfiguration } from './AWConfig/AWConfiguration'

export class Artwork {
  [key: string]: any

  id = ''
  title = ''
  published = false
  credits: Contributor[] = []
  year: number | null = null
  description = ''
  configurations: AWConfiguration[] = []
  controls = []
  stats = null

  static from (object: { [key: string]: any }): Artwork {
    const work = new Artwork()
    Object.keys(work).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      switch (key) {
        case 'credits':
          work.credits = ArrayOfType.from(object.credits, Contributor)
          break
        case 'configurations':
          work.configurations = ArrayOfType.from(object.configurations, AWConfiguration)
          break
        default:
          work[key] = object[key]
      }
    })
    return work
  }
}
