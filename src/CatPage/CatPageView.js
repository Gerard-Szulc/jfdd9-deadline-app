import React, {Component, Fragment} from 'react';
import './CatPage.css';
import CatPageFetcher from "./CatPageFetcher";


class CatPage extends Component {

  handleFavoriteClick = event => {
  }

  render() {
    return (
      <Fragment>
        <CatPageFetcher catId = {this.props.match.params.catId}/>
      </Fragment>
    )
  }
}

export default CatPage;