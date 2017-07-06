import React from 'react';

//import actions
import {
  addComicToCollection
} from 'components/SingleVolumeResult/actions';

export default class SingleVolumeResult extends React.Component {
  render() {
    let comic = this.props.comicObj;
    return (
      <div >
        <div>{comic.name}</div>
        <div>Issue #{comic.issue_number}</div>
        <button onClick={() => addComicToCollection(this.props.uid, 'wishList', comic)}>+ Wish List</button>
        <button onClick={() => addComicToCollection(this.props.uid, 'collection', comic)}>+ Collection</button>
      </div>
    )
  }
}
