import Firebase from 'firebase/app'
import config from './config'

const app = Firebase.initializeApp(config.firebase);

export default {
  app
}
