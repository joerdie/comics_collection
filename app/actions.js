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
export function createUserWithEmailAndPassword(email, password) {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      //handle errors here
    });
  }
}

export function logInWithGoogle() {
  return dispatch => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}

export function logOut() {
  const userID = store.getState().userInfo.uid;
  //reset the users location
  firebase.database().ref(`users/${userID}/location`).set(null);
  //set the user as not active
  firebase.database().ref(`users/${userID}/active`).set(false);

  //clear the user information
  store.dispatch({
    type: 'CLEAR_USER_INFO'
  });

  firebase.auth().signOut().then(function() {
    //run events after logout. The checkAuth function is handling this now
  }, function(error) {
    firebase.database().ref(`users/${user.uid}`).off();
    //untrack users
    // firebase.database().ref(`users/${user.uid}/loggedIn`).set(true);
    //handle errors here
    console.log(error);
  });
}

export function checkAuth() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //make the user active
      firebase.database().ref(`users/${user.uid}/active`).set(true);
      //make sure we have th correct information about the user inside of firebase
      firebase.database().ref(`users/${user.uid}/email`).set(user.email);

      //start tracking the users information
      firebase.database().ref(`users/${user.uid}`).on('value', snapshot => {
        store.dispatch({
          type: 'UPDATE_USER_INFO',
          uid: user.uid,
          payload: snapshot.val()
        });
      });

      store.dispatch({
        type: 'LOGGED_IN',
        ID: user.uid
      });
      //set the users flag to logged in in the db
      // firebase.database().ref(`users/${user.uid}/authenticated`).set(true);
      // console.log('logged in');

      //get the auth node for this user and place it in store
      firebase.database().ref(`auth/${user.uid}`).on('value', snapshot => {
        let locations = {
          0: {},
          3: {},
          5: {}
        },
        userLocations = {},
        admin = false;
        if (snapshot.val() != null) {
          if (snapshot.val().locations != null) {
            userLocations = snapshot.val().locations;
            if (snapshot.val().admin != null) {
              admin = snapshot.val().admin;
            }
          }
        }

        //find the length of the locations
        let numOfLocations = Object.keys(userLocations).length,
        counter = 0;
        // console.log(numOfLocations);

        //if numOfLocations is 0 then skip all this and just return nothing
        if (numOfLocations > 0) {
          //now categorize the entities by looping through the locations
          for (let entity in userLocations) {
            //go out and get the type
            firebase.database().ref(`entitiesNode/entities/${entity}/type`).once('value', type => {
              switch (type.val()) {
                case 0:
                locations[0][entity] = userLocations[entity];
                break;
                case 3:
                locations[3][entity] = userLocations[entity];
                break;
                case 5:
                locations[5][entity] = userLocations[entity];
                break;
              }
              //if the length of the numOfLocations is equal to the number of items in the new object then fire the action
              counter++
              if (counter == numOfLocations) {
                store.dispatch({
                  type: 'ADD/UPDATE_AUTH',
                  payload: {
                    admin,
                    locations
                  }
                });
              }
            });
          }
        } else {// num locations is 0
          store.dispatch({
            type: 'ADD/UPDATE_AUTH',
            payload: {
              admin,
              locations
            }
          });
        }
      });

      //clear out the login error messages
      store.dispatch({
        type: 'UPDATE_LOGIN_MESSAGE',
        message: null
      });
    } else {
      //this is probably uneccessary since the user is logged out
      // console.log('Not logged in');
      store.dispatch({
        type: 'LOGGED_OUT'
      });
    }
  });
}
