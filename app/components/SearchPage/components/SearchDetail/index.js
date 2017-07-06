import React from 'react';

//import actions
import {
  addComicToCollection
} from 'components/SearchPage/actions';

export default class SearchDetail extends React.Component {
  render() {
    let comic = this.props.comicObj;
    return (
      <div >
        <div>{comic.name}{comic.start_year}</div>
        {/* <button onClick={() => addComicToCollection('wishList', comic)}>+ Wish List</button>
        <button onClick={() => addComicToCollection('collection', comic)}>+ Collection</button> */}

      </div>
    )
  }
}
