import { FileInfo } from '../types/basic/FileInfo'

export function castToType <T> (object: { [key: string]: any }, Type: new () => T): T {
  const instance = new Type() as any
  if (!object || typeof object !== 'object') return instance
  Object.keys(instance).forEach(prop => {
    if (!object.hasOwnProperty(prop)) return
    const newVal = object[prop]
    let val
    switch (typeof instance[prop]) {
      case 'boolean':
        val = parseBoolean(newVal)
        if (typeof val === 'boolean') {
          instance[prop] = newVal
        }
        break
      case 'number':
        val = parseNumber(newVal)
        if (typeof val === 'number') {
          instance[prop] = newVal
        }
        break
      case 'string':
        if (typeof newVal === 'string') {
          instance[prop] = newVal
        }
        break
      default:
        const factory = Type.hasOwnProperty('propFactory') ? (Type as any).propFactory : null
        if (factory && typeof factory[prop] === 'function') {
          instance[prop] = factory[prop](newVal)
        }
    }
  })
  return instance as T
}

export function castToArrayOfType <T> (object: { [p: string]: any } | any[], Type: new () => T): T[] {
  if (typeof object === 'object' && object !== null) {
    const a = Array.isArray(object) ? object : Object.values(object)
    return a.map(item => castToType(item, Type))
  }
  return []
}

function parseBoolean (value: any): boolean | void {
  if (typeof value === 'boolean') {
    return value
  } else if (value === 1 || value === 0) {
    return !!value
  } else if (value === 'true' || value === 'false') {
    return value === 'true'
  }
}

function parseNumber (value: any): number | void {
  if (typeof value === 'number') {
    return value
  } else if (typeof value === 'string') {
    const n = parseFloat(value)
    if (Number.isFinite(n)) {
      return n
    }
  }
}
