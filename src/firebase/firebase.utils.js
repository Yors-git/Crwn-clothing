import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDECdA0q0zXynbZIXuaMzHHz_XIIpcxFqo',
	authDomain: 'crwn-db-d3b33.firebaseapp.com',
	projectId: 'crwn-db-d3b33',
	storageBucket: 'crwn-db-d3b33.appspot.com',
	messagingSenderId: '19360652961',
	appId: '1:19360652961:web:0adec0648015f3fb919ae0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
