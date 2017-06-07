import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

//import styles
import styles from './styles.scss';

//import actions
  import { logOut } from 'actions';
  import { toggleAccountMenu } from 'components/Header/actions/toggleAccountMenu';

export default class HeaderMyAccountMenu extends React.Component {
  handleMyAccountClick(){
    toggleAccountMenu(false);
  }

  handleLogOutClick(e){
    e.preventDefault();
    toggleAccountMenu(false);
    logOut();
  }

  render() {
    //set the menu class names
    let classNames = [styles.menu];
    if (this.props.menuOpen) {
      classNames.push(styles.open);
    }
    classNames = classNames.join(' ');

    return (
      <div className={classNames}>
        <div className={styles.menuItem}>
          <Link onClick={this.handleMyAccountClick.bind(this)} to="/myaccount">My Account</Link>
        </div>
        <div className={styles.menuItem}>
          <a onClick={this.handleLogOutClick.bind(this)} href="">Sign Out</a>
        </div>
      </div>
    )
  }
}
