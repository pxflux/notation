
export class FileInfo {
  [key: string]: any

  name: string
  type: string // mime type
  size: number // size in Bytes
  lastModified: number
  path: string // relative path
  url: string // storage url
  file?: File // a File input temporary stored before upload

  constructor (fileInfo: File | FileInfo, path?: string, url?: string) {
    this.name = fileInfo.name || ''
    this.type = fileInfo.type || ''
    this.size = fileInfo.size || 0
    this.lastModified = fileInfo.lastModified || 0
    this.path = path || (fileInfo as FileInfo).path || ''
    this.url = url || (fileInfo as FileInfo).url || ''
    if (fileInfo instanceof File) {
      this.file = fileInfo
    }
  }

}
