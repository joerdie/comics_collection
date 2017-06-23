import React from 'react';
import { connect } from 'react-redux';

//import actions
import {
  search
} from './actions';

//import styles
import styles from './styles.scss';

class SearchPage extends React.Component {
  handleSearchBlur(e){
    search(this.props.userInfo.CV_API_KEY, e.target.value);
  }

  render() {
    //display all the results
    let results = this.props.searchResults;
    let resultsArray = [];

    //loop through the results and format them
    for (let result in results) {
      let resultObj = results[result]
      resultsArray.push(<div key={result}><div>{resultObj.name} {resultObj.start_year}</div><button>+ Wish List</button><button>+ Collection</button></div>);
    }

    return (
      <div>
        <div className={styles.container}>
          <h1>Search</h1>
          <input type="text" onBlur={this.handleSearchBlur.bind(this)} placeholder="Search"/>
          {resultsArray}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResultsReducers.searchResults
  }
}

export default connect(mapStateToProps)(SearchPage);
