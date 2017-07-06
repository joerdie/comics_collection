import firebase from 'firebase';
import store from 'store';
import $ from 'jquery';

export function search(apiKey, term) {
  //build url to send to comic vine for a volume
  const url = `http://comicvine.gamespot.com/api/volumes/?api_key=${apiKey}&filter=name:${term}&format=jsonp`;
  // const url = `http://comicvine.gamespot.com/api/issues/?api_key=${apiKey}&filter=volume:${term}&format=jsonp`;

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
        type: 'UPDATE_SEARCH_RESULTS',
        payload: data.results
      });
    }
  });
}
