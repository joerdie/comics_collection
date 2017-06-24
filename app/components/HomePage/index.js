import React from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';

//import actions
import {
  fetchVolumes,
  unFetchVolumes
} from './actions';

//import styles
import styles from './styles.scss';

class HomePage extends React.Component {
  // componentDidMount(){
  //   fetchVolumes(this.props.userInfo.uid);
  //   // fetchVolumes('9ZmX6t1iW9UNjTNjoR6tMgWc4m82');
  // }

  componentWillUnmount(){
    unFetchVolumes(this.props.userInfo.uid);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userInfo.uid == undefined && nextProps.userInfo.uid != undefined) {
      fetchVolumes(nextProps.userInfo.uid);
    }
  }

  render() {
    let volumes = this.props.volumes;
    let volumesArray = [];
    for (let volume in volumes) {
      let volumeObj = volumes[volume];
      volumesArray.push(<div key={volume}>{volumeObj}</div>)
    }

    return (
      <div>
        <div className={styles.container}>
          <h1>Home Page</h1>
          <input placeholder="search"/>
          <button className={styles.button}>Collection</button>
          <button className={styles.button}>Wisth list</button>
          <button className={styles.button}>Pull list</button>
          {volumesArray}
          {/* <Link to="/addseries" className={styles.button}>Add/View Series</Link> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    volumes: state.homePageReducers.volumes
  }
}

export default connect(mapStateToProps)(HomePage);
