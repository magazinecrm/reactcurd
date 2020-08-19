import * as firebase from 'firebase'




var firebaseConfig = {
  apiKey: "AIzaSyADFrEw8guPpXXogZzio",
  authDomain: "react-cseapp.com",
  databaseURL: "https://react-crud-1cbb3.firebaseio.com",
  projectId: "react-crud-1cbb3",
  storageBucket: "react-crappspot.com",
  messagingSenderId: "930049773",
  appId: "1:930049169773:w7ac8e4683211282264",
  measurementId: "G-LHPNW5ZYM9"
};
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();




