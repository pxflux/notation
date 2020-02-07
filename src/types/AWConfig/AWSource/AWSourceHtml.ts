import { AWSource } from './AWSource'
import { SourceDependencyInfo } from './SourceDependencyInfo'
import { castToArrayOfType } from '../../../utilites/cast'

export class AWSourceHtml extends AWSource {

  dependencies: string[] = []

  constructor () {
    super('html')
  }

  static propFactory = {
    ...AWSource.propFactory,
    dependencies: (object: any) => castToArrayOfType(object, SourceDependencyInfo)
  }
}
