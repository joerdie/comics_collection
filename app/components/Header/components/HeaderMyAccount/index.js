import React from 'react';
import { connect } from 'react-redux';

//import styles
import styles from './styles.scss';

//import components
import HeaderMyAccountMenu from './components/HeaderMyAccountMenu';
import Avatar from 'Shared/components/Avatar';

//import actions
import { toggleAccountMenu } from 'components/Header/actions/toggleAccountMenu';

//import functions
import {shortenName} from 'Shared/functions/shortenName.js';

class HeaderMyAccount extends React.Component {
  handleArrowClick() {
    //fire an action that updates state. This could go to store but i think for now it could just be local state
    if (this.props.menuOpen) {
      toggleAccountMenu(false);
    } else {
      toggleAccountMenu(true);
    }
  }

  render() {
    //get the class names for the arrow
      let arrowClassNames = [styles.arrow];
      if (this.props.menuOpen) {
        arrowClassNames.push(styles.open);
      }
      arrowClassNames = arrowClassNames.join(' ');

      //get the iniitals for the default avatar. This is a calculated value that is not stored in the DB
      let initials = this.props.userAttributes.fullName;
      if (initials != "" && initials != undefined) {
        initials = initials.match(/\b(\w)/g);
        //limit the icon to two initials
        initials = initials.splice(0,2);
        initials = initials.join('');
      }

      let fullName = shortenName(this.props.userAttributes.fullName, 22);

    return (
      <div className={styles.container} onClick={this.handleArrowClick.bind(this)}>
        <div className={styles.avatarWrapper}>
          <Avatar
            fullName={this.props.userAttributes.fullName}
            backgroundImage={this.props.userAttributes.avatar}
            diameter={30}
            fontSize={13}
          ></Avatar>
        </div>
        {/* <div className="m-headerMyAccount-avatar" style={{backgroundImage: `url(${this.props.userAttributes.avatar})`}}>
          {!this.props.userAttributes.avatar &&
            initials
          }
        </div> */}
        <div className={styles.name}>{fullName}</div>
        <div className={styles.arrowLinkWrapper}>
          <svg className={arrowClassNames} width="16" height="9" viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg">
            <path d="M.15 1.172C.05 1.078 0 .938 0 .75 0 .53.083.352.25.21.417.07.617 0 .85 0h14.3c.233 0 .433.07.6.21.167.142.25.32.25.54 0 .156-.05.28-.15.375l-.1.14-6.8 7.313C8.65 8.858 8.333 9 8 9c-.333 0-.65-.14-.95-.422L.25 1.266l-.1-.094z"/>
          </svg>
        </div>
        <HeaderMyAccountMenu
          menuOpen={this.props.menuOpen}
        ></HeaderMyAccountMenu>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    menuOpen: state.header.myAccountMenu.open,
    userAttributes: state.userInfo
  }
}

export default connect(mapStateToProps)(HeaderMyAccount);
