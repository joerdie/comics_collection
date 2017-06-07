import React from 'react';

//import styles
import styles from './styles.scss';

export default class DropdownSelect extends React.Component {
  constructor(){
    super();

    this.state = {
      hover: false
    };
  }

  handleMouseEnter() {
    this.setState({
      hover: true
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: false
    });
  }

  handleChange(e){
    //fire the onChange function that is passed in
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  render() {
    let classNames = [styles.selectWrapper],
    options = this.props.options || {},
    optionsArray = [];

    //figure out hover state
    if (this.state.hover) {
      classNames.push(styles.selectWrapperHover);
    }
    classNames = classNames.join(' ');

    //loop through the values provided
    for (let option in options) {
      optionsArray.push(
        <option
          key={option}
          value={option}
        >{options[option]}</option>
      )
    }

    return (
      <div
        className={classNames}
        onMouseOver={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}>
        <select
          value={this.props.defaultValue}
          onChange={this.handleChange.bind(this)}>
          {optionsArray}
        </select>
      </div>
    )
  }
}
