import firebase from 'firebase';
import store from 'store';

import $ from 'jquery';

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
    store.dispatch({
      type: 'ADD_SERIES_TO_SERIES_DASHBOARD',
      payload: snapshot.val()
    });
  });
}


    export function getSeriesFromComicVine() {
      //const url = "http://comicvine.gamespot.com/api/characters/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=gender:male,name:hawkeye&format=jsonp";
      //const url = "http://comicvine.gamespot.com/api/volumes/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&field_list=name,start_year&sort=start_year:asc&filter=name:x-men&format=jsonp";
      //const url = "http://comicvine.gamespot.com/api/volumes/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=name:the x-men&format=jsonp";
      const url = "http://comicvine.gamespot.com/api/volume/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=id:4050-2133&format=jsonp";
      $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        jsonp: 'json_callback',
        dataType: 'jsonp',
        success: function (data) {
          console.log(data);
        }
      });
}
