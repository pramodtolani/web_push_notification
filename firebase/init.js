if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "apiKey",
  "databaseURL": "https://<project-id>.firebaseio.com",
  "storageBucket": "<project-id>.appspot.com",
  "authDomain": "<project-id>.firebaseapp.com",
  "messagingSenderId": "messagingSenderId",
  "projectId": "projectId",
  "appId": "appId"
});
