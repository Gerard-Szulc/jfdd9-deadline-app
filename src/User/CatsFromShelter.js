import React, {Component} from 'react'
import {withCatPage} from "../CatPage/context/CatPageContext";
import CatContainer from '../List/CatContainer'
import {withUser} from "./context/User";


const isShelter = userId => {
  return (
    userId === 'YcFFJByZ6nUuxFfzbvO9jHYUMHJ3' ||
    userId === 'TFFiewHfyjZxcpo18nPAFb2HyRU2' ||
    userId === '2nfC3GoY4TRw3v0NDNzctBFJAL02'
  )
}

class CatsFromShelter extends Component {

  render () {
    return (
      <div className="shelterPanel">
        <div>
          <div className={"list"}>
            {
              this.props.cats &&
              this.props.cats.filter(
                cat=> cat.shelter === this.props.shelter
              ).filter(
                cat => {
                  return !this.props.adoptionRequests.some(
                    request => request.catId === cat.id && request.accepted === true
                  )
                }).map(
                element=><CatContainer key={element.id} cat={element}/>
              )
            }
          </div>
        </div>


      </div>

    )
  }
}

export default withUser(withCatPage(CatsFromShelter))