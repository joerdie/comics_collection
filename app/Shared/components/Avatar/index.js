import React from 'react';

//import styles
import styles from './styles.scss';

//import functions
import {shortenName} from 'Shared/functions/shortenName.js';

//OPTIONS
// if default says css then the default value is in the css file
// value: default, required
// diameter: none, true
// backgroundColor: css, false
// backgroundImage: none, false
// fontSize: css, false
// fontColor: css, false
// border: css, false
// fullName: none, true
//accessLevel: none, false

export default class Avatar extends React.Component {
  constructor(){
    super();

    this.state = {
      hover: false
    };
  }

  handleMouseEnter() {
    if (this.props.popup) {
      this.setState({
        hover: true
      });
    }
  }

  handleMouseLeave() {
    if (this.props.popup) {
      this.setState({
        hover: false
      });
    }
  }

  displayError(message){
    console.log(`%c Error: ${message}`, 'color: red');
  }

  render() {

    let initials = this.props.fullName,
    accessLevel = "",
    inlineStyles = {};
    //add classnames based on situations
    let classNames = [styles.avatar];
    if (this.state.hover) {
      classNames.push(styles.hover);
    }
    classNames = classNames.join(' ');

    //get the correct access level name
    switch (this.props.accessLevel) {
      case 0:
        accessLevel = "Owner"
        break;
      case 1:
        accessLevel = "Collaborator"
        break;
    }

    //add the styles based on the attributes that come in
    if (this.props.diameter) {
      inlineStyles['width'] = `${this.props.diameter}px`;
      inlineStyles['height'] = `${this.props.diameter}px`;
    } else {
      this.displayError('Avatar Component needs a diameter')
    }

    if (this.props.backgroundColor) {
      inlineStyles['backgroundColor'] = this.props.backgroundColor;
    }

    if (this.props.backgroundImage) {
      inlineStyles['backgroundImage'] = `url(${this.props.backgroundImage})`;
    }

    if (this.props.fontSize) {
      inlineStyles['fontSize'] = `${this.props.fontSize}px`;
      inlineStyles['lineHeight'] = `url(${this.props.fontSize})`;
    }

    if (this.props.fontColor) {
      inlineStyles['color'] = this.props.fontColor;
    }

    if (this.props.border == false) {
      inlineStyles['border'] = 'none';
    }



    //format the initials
    if (initials != "" && initials != undefined) {
      initials = initials.match(/\b(\w)/g);
      //limit the icon to two initials
      initials = initials.splice(0,2);
      initials = initials.join('');
    }

    //limit the name to a certain num of chars
    let fullName = shortenName(this.props.fullName, 22);

    return (
      <div
        className={classNames} style={inlineStyles} onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}>
          {!this.props.backgroundImage &&
            initials
          }
        <div className={styles.hoverBox}>
          <p>{fullName} ({accessLevel})</p>
        </div>
      </div>
    )
  }
}
