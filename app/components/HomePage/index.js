import React from 'react';
import {Link} from 'react-router';

//import styles
import styles from './styles.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Home Page</h1>
          <Link to="/addseries" className={styles.button}>Add/View Series</Link>
        </div>
      </div>
    )
  }
}
