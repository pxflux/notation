import { AWSourceVideo } from './AWSourceVideo'
import { castToType } from '../../../utilites/cast'

export class AWSourceVimeo extends AWSourceVideo {
  constructor () {
    super('vimeo')
  }

  static propFactory = {
    ...AWSourceVideo.propFactory
  }

  static fromVimeoEmbed (url: string, vimeo: VimeoEmbedData): AWSourceVimeo {
    const obj = {
      url,
      type: 'vimeo',
      duration: vimeo.duration,
      resolution: { w: vimeo.width, h: vimeo.height },
      thumbnail: {
        url: vimeo.thumbnail_url,
        resolution: { w: vimeo.thumbnail_width, h: vimeo.thumbnail_height }
      }
    }
    return castToType(obj, AWSourceVimeo)
  }
}

export interface VimeoEmbedData {
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

