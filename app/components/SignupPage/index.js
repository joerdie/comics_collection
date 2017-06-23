import React from 'react';
import firebase from 'firebase';

//import actions
import {
  signInWithGoogle
} from './actions';

//import styles
import styles from './styles.scss';

export default class SignupPage extends React.Component {
  handleFormSubmission(e){
    e.preventDefault();
    const formData = {
      email: this.refs.email.value,
      password: this.refs.password.value,
      apikey: this.refs.apikey.value,
      userName: this.refs.userName.value
    };

    signupUser(formData);
  }

  handleGoogleSignupClick(){
    signInWithGoogle()
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Sign Up</h1>
          <button className={styles.btn} onClick={this.handleGoogleSignupClick.bind(this)}>Sign up with the google</button>
          {/* <form ref="signupForm" onSubmit={this.handleFormSubmission.bind(this)}>
            <input type="text" ref="email" placeholder="Email Address"/>
            <input type="text" ref="password" placeholder="Password"/>
            <input type="text" ref="apikey" placeholder="API_KEY"/>
            <input type="text" ref="userName" placeholder="User Name"/>
            <button className={styles.button} type="submit">Add Series</button>
          </form> */}
        </div>
      </div>
    )
  }
}
