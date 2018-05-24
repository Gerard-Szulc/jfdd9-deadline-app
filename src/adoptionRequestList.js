import React, {Component} from 'react'
import {withCatPage} from "./CatPage/context/CatPageContext";
import CatContainer from './List/CatContainer'


class adoptionRequestList extends Component {
  render () {
    return (
      <div>
        <h2>Koty oczekujące na akceptacje</h2>
        {              this.props.cats && this.props.cats.filter( cat =>
          this.props.adoptionRequests.some(request => request.catId === cat.id)
        ).map(element=><CatContainer key={element.id} cat={element}/>)}

      </div>

    )
  }
}

export default withCatPage(adoptionRequestList)