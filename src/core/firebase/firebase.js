import firebase from 'firebase';
import { firebaseConfig } from './firebaseConfig';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseDB = firebaseApp.database();