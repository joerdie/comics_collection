import React from 'react';

//import styles
import styles from './styles.scss';

//import actions
import {createNewIssue} from './actions';

export default class AddComicBookPage extends React.Component {
  handleFormSubmission(e){
    e.preventDefault();
    const formData = {
      series: this.refs.series.value,
      issueNumber: this.refs.issueNumber.value,
      name: this.refs.name.value
    };

    createNewIssue(formData);
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Add A Comic Book</h1>
          <form ref="addComicForm" onSubmit={this.handleFormSubmission.bind(this)}>
            <input type="text" ref="series" placeholder="Series Name"/>
            <input type="text" ref="issueNumber" placeholder="Issue #"/>
            <input type="text" ref="name" placeholder="Comic Book Name"/>
            <button className={styles.button}>Upload Cover Photo</button>
            <button className={styles.button} type="submit">Add Comic Book</button>
          </form>
        </div>
      </div>
    )
  }
}
