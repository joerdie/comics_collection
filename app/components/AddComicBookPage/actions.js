import firebase from 'firebase';
import store from 'store';

//here we will create an action that sends a new issue to firebase
export function createNewIssues(formData) {

  //get a new id from firebase
  let issueID = firebase.database().ref(`/books`).push().key;

  //create a firebase update object
  let firebaseUpdates = {};

  //update the
  firebaseUpdates[`/issues/${issueID}`] = formData;

  //send the update to firebase
  firebase.database().ref().update(firebaseUpdates);
}
