import React from 'react';
import {Link} from 'react-router';

//import styles
import styles from './styles.scss';

//import components
export default class Header extends React.Component {
  handleLogOutClick(){
    this.props.logOut();
  }

  render() {
    return (
      <header className={styles.siteHeader}>
        <div className={styles.container}>
          <div className={styles.logoLinkWrapper}>
            <Link to="/">
              name here
            </Link>
          </div>
          <button onClick={this.handleLogOutClick.bind(this)} className={styles.button}>Log Out</button>
        </div>
      </header>
    )
  }
}
