import React from 'react';
import {Link} from 'react-router';
import { browserHistory } from 'react-router'

//import styles
import styles from './styles.scss';

//import components
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  handleSearchSubmit(e){
    e.preventDefault();
    browserHistory.push(`/searchresults/${this.state.searchTerm}`)
  }

  searchTermChange(e) {
    this.setState({searchTerm: e.target.value});
  }

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
          <form onSubmit={this.handleSearchSubmit.bind(this)}>
            <input onChange={this.searchTermChange.bind(this)} placeholder="search"/>
          </form>
          <button onClick={this.handleLogOutClick.bind(this)} className={styles.button}>Log Out</button>
        </div>
      </header>
    )
  }
}
