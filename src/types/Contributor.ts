export class Contributor {
  profileId = ''
  fullName = ''
  role = ''

  static from (object: object): Contributor {
    return new Contributor()
  }

  toEntries (prefix: string): {[key: string]: any} {
    const data: { [key: string]: any } = {}
    data[prefix + 'fullName'] = this.fullName
    data[prefix + 'role'] = this.role
    return data
  }
}
