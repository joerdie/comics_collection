import firebase from 'firebase';

export function updateAPIkey(value) {
  //create a firebase update object
  let firebaseUpdates = {};

  //update the
  firebaseUpdates[`/users/${firebase.auth().currentUser.uid}/CV_API_KEY`] = value;

  //send the update to firebase
  firebase.database().ref().update(firebaseUpdates);
}
