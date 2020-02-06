import { ArrayOfType } from '../../../utilites/ArrayOfType'
import { AWSource } from './AWSource'
import { SourceDependencyInfo } from './SourceDependencyInfo'

export class AWSourceHtml extends AWSource {
  [key: string]: any

  dependencies: string[] = []

  constructor () {
    super('html')
  }

  static from (object: { [p: string]: any }): AWSourceHtml {
    const sr = new AWSourceHtml()
    if (object.hasOwnProperty('dependencies')) {
      sr.dependencies = ArrayOfType.from(object.dependencies, SourceDependencyInfo)
    }
    return Object.assign(sr, AWSource.from(object))
  }
}
