// src/config/firebaseAdmin.js
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://pocketclass-a5fd6.firebaseio.com" 
});

const db = getFirestore();
const auth = getAuth();

export { db, auth };
