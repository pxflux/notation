export class ArrayOfType {
  static empty (Constructor: any): [any] {
    return [typeof Constructor.empty === 'function' ? Constructor.empty() : new Constructor()]
  }

  static from (object: { [key: string]: any } | any[], Constructor: any): any[] {
    if (!Constructor) return []
    if (Array.isArray(object)) {
      return object.map(item => typeof Constructor.from === 'function'
        ? Constructor.from(item)
        : new Constructor(item))
    }
    if (typeof object === 'object' && object !== null) {
      if (typeof Constructor.from === 'function') {
        return Object.keys(object).map(key => Constructor.from({ ...object[key], id: key }))
      } else {
        return Object.keys(object).map(key => new Constructor({ ...object[key], id: key }))
      }
    }
    return []
  }
}
