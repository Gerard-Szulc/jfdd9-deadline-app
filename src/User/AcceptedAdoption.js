import React, {Component} from 'react';
import {withUser} from "./context/User";
import {withCatPage} from "./../CatPage/context/CatPageContext";
import CatContainer from "./../List/CatContainer";


const isShelter = userId => {
  return (
    userId === 'YcFFJByZ6nUuxFfzbvO9jHYUMHJ3' ||
    userId === 'TFFiewHfyjZxcpo18nPAFb2HyRU2' ||
    userId === '2nfC3GoY4TRw3v0NDNzctBFJAL02'
  )
}

class AcceptedAdoption extends Component {
  render() {
    return (
      <div className="shelterPanel">
            <div className="flex">
              {
                this.props.cats && this.props.cats.filter(
                  cat => this.props.adoptionRequests.some(
                    request => request.catId === cat.id && isShelter(this.props.user.uid) &&  request.accepted === false
                  )
                ).filter(cat=> cat.shelter === this.props.shelter).map(
                  element => <CatContainer key={element.id} cat={element} shelterModeOn />
                )
              }
            </div>


      </div>
    )
  }
}

export default withUser(withCatPage(AcceptedAdoption));