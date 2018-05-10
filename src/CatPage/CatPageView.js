import React, {Component, Fragment} from 'react';
import './CatPage.css';
import CatPageFetcher from "./CatPageFetcher";
import {withCatPage} from "./context/CatPageContext";


class CatPage extends Component {



  render() {
    return (

      <Fragment>
        <CatPageFetcher catId = {this.props.match.params.catId}/>
      </Fragment>
    )
  }
}

export default withCatPage(CatPage);