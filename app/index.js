import React from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import {getTrackUserInfo, checkAuth, logOut} from './actions';

//import styles
require('styles.scss');
import styles from './styles.scss';

export class App extends React.Component {
  componentWillMount() {
    checkAuth();
  }

  //Track the users location for locations we specify
  componentWillReceiveProps (nextProps) {
    //everytime a user is on a canvas set that as their location. if they are not on a canvas then do nothing
    //make sure we are not sending firebase calls after the user has logged out. The logout function will handle resetting all user data
    // if (nextProps.authenticated !== 'waiting' && nextProps.authenticated && this.props.authenticated !== 'waiting') {
    //   if (nextProps.params.canvasID !== undefined) {
    //     updateUser(this.props.authenticated, {
    //       location: nextProps.params.canvasID
    //     });
    //   } else {
    //     updateUser(this.props.authenticated, {
    //       location: null
    //     });
    //   }
    // }
  }

  componentWillUnmount(){
    //make the user inactive
    // firebase.database().ref(`users/${this.props.authenticated}/active`).set(false);
  }

  render(){
    let showHeader = true,
    showSubHeader = true;
    if (this.props.children.props.route.header != undefined) {
      showHeader = this.props.children.props.route.header;
    }

    if (this.props.children.props.route.subHeader != undefined) {
      showSubHeader = this.props.children.props.route.subHeader;
    }

    return (
      <div>
        <div className={styles.siteWrapper} id="mainSite">
          {showHeader &&
          <Header
            isAuthenticated={this.props.authenticated}
            logOut={logOut}
          ></Header>
          }
          <div className={styles.siteMain}>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps)(App);
