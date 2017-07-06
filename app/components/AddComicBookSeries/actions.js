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
    //const url = "http://joerdie.com/api/volumes/";
    // const url = "http://joerdie.com/api/products/";
    // const url = "http://joerdie.com/api/tblPublishers";
    const url = "http://joerdie.com/api/tblPublishers";
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

  //export function getSeriesFromComicVine() {
    //Cody initial api solve.
    //const url = "http://comicvine.gamespot.com/api/characters/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=gender:male,name:hawkeye&format=jsonp";
    //Failed Volume search with Sort by year.
    //const url = "http://comicvine.gamespot.com/api/volumes/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&field_list=name,start_year&sort=start_year:asc&filter=name:x-men&format=jsonp";
    //Volume Search
    //const url = "http://comicvine.gamespot.com/api/volumes/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=name:the x-men&format=jsonp";
    //get issues with volume id
    //const url = "http://comicvine.gamespot.com/api/issues/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=volume:2133&format=jsonp";
    //Example for getting single issue.
    //const url = "http://comicvine.gamespot.com/api/issue/4000-6694/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&format=jsonp";
    //Example for getting issue with volume and issue number known.
    //const url = "http://www.comicvine.com/api/issues/?api_key=[API KEY]&filter=volume:3976,issue_number:3"
    //Example of Publisher information
  // const url = "http://comicvine.gamespot.com/api/publishers/?api_key=f18c6362ec6d4c0d7b6d550f36478c1cd6c04a49&filter=name:Marvel&format=jsonp";
  // $.ajax({
  //   url: url,
  //   type: 'GET',
  //   crossDomain: true,
  //   jsonp: 'json_callback',
  //   dataType: 'jsonp',
  //   success: function (data) {
  //     console.log(data);
  //   }
  // });
}
