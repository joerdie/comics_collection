import React from 'react';
import { connect } from 'react-redux';

//import actions
import {
  search
} from './actions';

// import components
import SearchDetail from './components/SearchDetail';

//import styles
import styles from './styles.scss';

class SingleVolumeResult extends React.Component {
  // componentDidMount() {
  //   //run a query on comic vine returning all indiv issues from this volume
  //   search(this.props.userInfo.CV_API_KEY, this.props.params.cvID);
  // }

  componentDidMount() {
    search(this.props.userInfo.uid, this.props.userInfo.CV_API_KEY, this.props.params.cvID);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.userInfo.CV_API_KEY == undefined && nextProps.userInfo.CV_API_KEY != undefined) {
    }
  }


  render() {
    //display all the results
    let results = this.props.results;
    let resultsArray = [],
    volumeName = "";

    if (results[0] != undefined) {
      if (results[0].volume != undefined) {
        volumeName = results[0].volume.name
      }
    }

    //loop through the results and format them
    for (let result in results) {
      let resultObj = results[result]
      resultsArray.push(
        // <p>{resultObj.name}</p>
        <SearchDetail
          key={result}
          uid={this.props.userInfo.uid}
          comicObj={resultObj}
        />
      );
    }

    return (
      <div>
        <div className={styles.container}>
          <h1>{volumeName}</h1>
          {resultsArray}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.singleVolumeResult.searchResults
  }
}

export default connect(mapStateToProps)(SingleVolumeResult);
