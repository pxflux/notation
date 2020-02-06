export class SourceDependencyInfo {
  [key: string]: any

  name = ''
  type = '' // something like: npm lib, api, etc.
  url = ''

  static from (object: {[p: string]: any}): SourceDependencyInfo {
    const dp = new SourceDependencyInfo()
    Object.keys(dp).forEach(key => {
      if (!object.hasOwnProperty(key)) return
      dp[key] = object[key]
    })
    return dp
  }
}
