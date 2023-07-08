import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBe7Rhewv1FZxORb1XH3PpJjTSSUXeEmiI',
  authDomain: 'emotionalnotebook-18626.firebaseapp.com',
  databaseURL: 'https://emotionalnotebook-18626-default-rtdb.firebaseio.com',
  projectId: 'emotionalnotebook-18626',
  storageBucket: 'emotionalnotebook-18626.appspot.com',
  messagingSenderId: '607460077626',
  appId: '1:607460077626:web:06407cb36daec07ae14503',
  measurementId: 'G-Z1DE17VRKC'
}

const app = initializeApp(firebaseConfig)
const dbFirestore = getFirestore(app)
export { dbFirestore }
