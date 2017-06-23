import React from 'react';

//import actions
import {
  updateAPIkey
} from './actions';

//import styles
import styles from './styles.scss';

export default class SignupPage extends React.Component {
  handleAPIblur(e){
    updateAPIkey(e.target.value);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>My Account</h1>
          <input type="text" onBlur={this.handleAPIblur.bind(this)} ref="apiKey" placeholder="API KEY"/>
        </div>
      </div>
    )
  }
}
