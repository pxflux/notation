import { castToType } from '../../utilites/cast'

export class FileInfo {

  name = ''
  type = ''   // mime type
  size = 0    // size in Bytes
  lastModified = 0
  path = ''   // relative path
  url = ''    // storage url
  file?: File // a File input temporary stored before upload

  static from (object: FileInfo | File): FileInfo {
    if (object instanceof File) {
      return FileInfo.fromFile(object)
    } else if (object.file && object.file instanceof File) {
      const o = {
        ...object,
        name: object.file.name || '',
        type: object.file.type || '',
        size: object.file.size || 0,
        lastModified: object.file.lastModified || 0
      }
      return castToType(o, FileInfo) // this will also check types of 'url' & 'path'
    } else {
      return castToType(object, FileInfo)
    }
  }

  static fromFile (file: File): FileInfo {
    const o = new FileInfo()
    o.name = file.name || ''
    o.type = file.type || ''
    o.size = file.size || 0
    o.lastModified = file.lastModified || 0
    o.file = file
    return o
  }
}
