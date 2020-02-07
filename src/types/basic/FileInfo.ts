export class FileInfo {

  name = ''
  type = '' // mime type
  size = 0 // size in Bytes
  lastModified = 0
  path = '' // relative path
  url = '' // storage url
  file?: File // a File input temporary stored before upload

  static fromFile (file: File, path?: string, url?: string): FileInfo {
    const o = new FileInfo()
    o.name = file.name || ''
    o.type = file.type || ''
    o.size = file.size || 0
    o.lastModified = file.lastModified || 0
    o.path = path || ''
    o.url = url || ''
    o.file = file
    return o
  }
}
