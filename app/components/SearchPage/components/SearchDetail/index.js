import React from 'react';
import {Link} from 'react-router';

export default class SearchDetail extends React.Component {
  render() {
    let volume = this.props.comicObj;
    return (
      <div >
        <Link to={`/singleVolumeResult/${volume.id}`}><div>{volume.name}{volume.start_year}</div></Link>
        {/* <button onClick={() => addComicToCollection('wishList', comic)}>+ Wish List</button>
        <button onClick={() => addComicToCollection('collection', comic)}>+ Collection</button> */}

      </div>
    )
  }
}
