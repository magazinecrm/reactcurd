import * as firebase from 'firebase'




var firebaseConfig = {
  apiKey: "AIzaSyADF4ohCdk160ywuVprEw8guPpXXogZzio",
  authDomain: "react-crud-1cbb3.firebaseapp.com",
  databaseURL: "https://react-crud-1cbb3.firebaseio.com",
  projectId: "react-crud-1cbb3",
  storageBucket: "react-crud-1cbb3.appspot.com",
  messagingSenderId: "930049169773",
  appId: "1:930049169773:web:d9cb7ac8e4683211282264",
  measurementId: "G-LHPNW5ZYM9"
};
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();




