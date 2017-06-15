import React from 'react';
import {connect} from 'react-redux';

//import styles
import styles from './styles.scss';

//import actions
import {
  createNewSeries,
  retrieveSeries,
  getSeriesFromComicVine
} from './actions';

class AddComicBookSeries extends React.Component {
  componentDidMount(){
    retrieveSeries();
  }

  handleFormSubmission(e){
    e.preventDefault();
    const formData = {
      name: this.refs.seriesName.value,
      publisher: this.refs.publisher.value,
      startYear: this.refs.startYear.value
    };

    createNewSeries(formData);
  }

  handleAPIClick(){
    getSeriesFromComicVine();
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1>Add A Series</h1>
          <form ref="addComicSeries" onSubmit={this.handleFormSubmission.bind(this)}>
            <input type="text" ref="seriesName" placeholder="Series Name"/>
            <input type="text" ref="publisher" placeholder="Publisher"/>
            <input type="text" ref="startYear" placeholder="Start Year"/>
            <button className={styles.button} type="submit">Add Series</button>
          </form>
          <button className={styles.button} onClick={this.handleAPIClick.bind(this)}>Test API</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    series: state.seriesDashboard
  }
}

export default connect(mapStateToProps)(AddComicBookSeries);
