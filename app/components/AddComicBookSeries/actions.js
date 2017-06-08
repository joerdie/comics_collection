import firebase from 'firebase';
import store from 'store';

//here we will create an action that sends a new issue to firebase
export function createNewSeries(formData) {

  //get a new id from firebase
  let seriesID = firebase.database().ref().push().key;

  //create a firebase update object
  let firebaseUpdates = {};

  //update the
  firebaseUpdates[`/series/${seriesID}`] = formData;

  //send the update to firebase
  firebase.database().ref().update(firebaseUpdates);
}

export function retrieveSeries() {
  firebase.database().ref(`series`).on('value', snapshot => {
    console.log(snapshot.val());
    store.dispatch({
      type: 'ADD_SERIES_TO_SERIES_DASHBOARD',
      payload: snapshot.val()
    });
  });
}
