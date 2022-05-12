import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLCph_NwsPlZhxy1nKQDwT16EXEXAmqKE',
  authDomain: 'todo-crud-74273.firebaseapp.com',
  projectId: 'todo-crud-74273',
  storageBucket: 'todo-crud-74273.appspot.com',
  messagingSenderId: '900670247210',
  appId: '1:900670247210:web:119a45009fa92671314e53',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export const colRef = collection(db, 'todos');

export { db, auth };
