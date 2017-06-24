import firebase from 'firebase';
import store from 'store';

// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

//USER ACTIONS

//this function does not return anything and lets the checkAuth function do all the work
// export function createUserWithEmailAndPassword(email, password) {
//   return dispatch => {
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//       //handle errors here
//     });
//   }
// }

export function logOut() {
  // const userID = store.getState().userInfo.uid;

  firebase.auth().signOut().then(function() {
    //run events after logout. The checkAuth function is handling this now
    console.log('successful');
  }, function(error) {
    //untrack users
    // firebase.database().ref(`users/${user.uid}/loggedIn`).set(true);
    //handle errors here
    console.log(error);
  });
}

export function checkAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(`The user with the email ${user.email} is logged in`);

      //put a listener on the users node in firebase
      //start tracking the users information
      firebase.database().ref(`users/${user.uid}`).on('value', snapshot => {
        store.dispatch({
          type: 'UPDATE_USER_INFO',
          uid: user.uid,
          payload: snapshot.val()
        });
      });
    }
  });
}
