import firebase from 'firebase';
import store from 'store';

export function fetchVolumes(uid) {
  console.log(uid);
  firebase.database().ref(`volumes/${uid}`).on('value', snapshot => {
    store.dispatch({
      type: 'UPDATE_HOME_PAGE_VOLUMES',
      payload: snapshot.val()
    })
  });
}

export function unFetchVolumes(uid) {
  firebase.database().ref(`volumes/${uid}`).off();
}
