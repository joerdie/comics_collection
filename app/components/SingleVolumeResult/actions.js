import firebase from 'firebase';
import store from 'store';
import $ from 'jquery';

export function search(uid, apiKey, comicVineID) {
  console.log(comicVineID);
  console.log(apiKey);

  //grab the users volume from firebase
  // firebase.database().ref(`volumes/${uid}`).on('value', snapshot => {
  //   store.dispatch({
  //     type: 'UPDATE_HOME_PAGE_VOLUMES',
  //     payload: snapshot.val()
  //   })
  // });

  const url = `http://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&filter=volume:${comicVineID}&format=jsonp`;

  if (apiKey != undefined) {
    // api call
    $.ajax({
      url: url,
      type: 'GET',
      crossDomain: true,
      jsonp: 'json_callback',
      dataType: 'jsonp',
      success: function (data) {
        console.log(data);
        store.dispatch({
          type: 'UPDATE_SINGLE_VOLUME_ISSUES_SEARCH_RESULTS',
          payload: data.results
        });
      }
    });
  } else {
    console.log('you sent and undefined apiKey');
  }
}


export function addComicToCollection(uid, section, comicObj, parentInfo) {
  //start the thinking gif here


  //create an object that we will use to parse the json object that we are passed
  const builder = {
    volume: ''
  }

  let firebaseUpdates = {};

  //create the initial issue that will go in the issues master node
  let issue = {
    list: section,
    ...comicObj
  }

  //push for a new id
  let newIssueID = firebase.database().ref().push().key;

  firebaseUpdates[`users/${uid}/issues/${newIssueID}`] = issue;

  //send all the data to firebase
  firebase.database().ref().update(firebaseUpdates);

  //end the thinking gif here

}
