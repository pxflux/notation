import { Contributor } from './Contributor'

export class ContributorList {
  static empty () {
    return []
  }

  static from (value: object | any[]) {
    if (!value) {
      return []
    }
    if (Array.isArray(value)) {
      return value.map(item => Contributor.from(item))
    }
    if (typeof value === 'object') {
      return Object.keys(value).map(key => Contributor.from({ ...value, profileId: key }))
    }
    return []
  }
}
