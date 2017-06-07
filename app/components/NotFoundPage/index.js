import React from 'react';

//import styles
import styles from './styles.scss';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.bigText}>OOPS!</p>
        <p>Sorry, something went wrong</p>
      </div>
    )
  }
}
