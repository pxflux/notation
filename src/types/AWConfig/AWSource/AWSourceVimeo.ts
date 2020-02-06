import { AWSourceVideo } from './AWSourceVideo'
import { ImageInfo } from '../../basic/ImageInfo'
import { Resolution } from '../../basic/Resolution'

export interface VimeoData {
  account_type: string
  author_name: string
  author_url: string
  description: string
  duration: number
  height: number
  html: string
  thumbnail_height: number
  thumbnail_url: string
  thumbnail_url_with_play_button: string
  thumbnail_width: number
  video_id: number
  width: number
}

export class AWSourceVimeo extends AWSourceVideo {
  constructor () {
    super('vimeo')
  }

  static from (object: { [p: string]: any }): AWSourceVimeo {
    const o = new AWSourceVimeo()
    if (object.hasOwnProperty('vimeoPlus')) {
      o.vimeoPlus = object.vimeoPlus
    }
    return Object.assign(o, AWSourceVideo.from(object))
  }

  static fromVimeo (url: string, vimeo: VimeoData): AWSourceVimeo {
    const obj = {
      url,
      type: 'vimeo',
      duration: vimeo.duration,
      resolution: new Resolution(vimeo.width, vimeo.height),
      thumbnail: new ImageInfo(
        undefined,
        vimeo.thumbnail_url,
        new Resolution(
          vimeo.thumbnail_width,
          vimeo.thumbnail_height
        )
      )
    }
    return AWSourceVimeo.from(obj)
  }
}
