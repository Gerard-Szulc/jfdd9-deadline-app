import React, {Component, Fragment} from 'react';
import Shelters from "../Shelters";
import {withCatPage} from "./context/CatPageContext";
import {withUser} from '../User/context/User'
import firebase from 'firebase'

class CatPageFetcher extends Component {

  state = {
    cat: null,
  };


  render() {
    const cat = this.props.cats.find(cat => cat.id === this.props.catId)

    if (this.props.fetching === false && cat === undefined) {
      return <p>Cat not found</p>
    }

    if (this.props.fetching) {
      return <p>Loading cat</p>
    }

    const adoptionRequest = this.props.adoptionRequests.find((adoptedCat) =>
      adoptedCat.catId === cat.id)

    const favourite = this.props.favourite.find((favouriteCat) =>
      favouriteCat.catId === cat.id && favouriteCat.user === this.props.user.uid)


    return (
      this.props.fetching === false && cat && (
        <Fragment>
          <div className="CatPage">
            <div className="catDiv">
              <img className="catImage" alt="cat" src={cat.image}/>

              {this.props.user === null ? 'Zaloguj się!' :
                (this.props.user !== null && !favourite ?
                    <button className="catButtons" onClick={
                      () => this.props.toggleCatFavorite(cat)}> Polub mnie
                    </button> : (favourite.user === this.props.user.uid ? <button className="catButtons" onClick={
                        () => this.props.toggleCatFavorite(cat)}> Odlub mnie
                      </button> : 'Kota nie ma'

                    )
                )
              }


              {this.props.user === null ? 'Zaloguj się!' :
                (this.props.user !== null && !adoptionRequest ?
                  <button className="catButtons" onClick={
                    () => this.props.toggleCatAdopted(cat)}> Adoptuj mnie
                  </button> : (
                    adoptionRequest.accepted === false  ? 'Kot czeka na akceptację adopcji przez schronisko' : (
                      adoptionRequest.user === this.props.user.uid ? 'To twój kot' : 'Kota nie ma'
                    )
                  )
                )
              }


            </div>

            <div className="catDiv">
              <h2>{cat.name}</h2>
              <p><strong>Płeć:</strong> {cat.sex}. <strong>Wiek:</strong> {cat.age}</p>
              <p className="catDescription">
                {cat.description}
              </p>

            </div>

          </div>
          <Shelters gestureHandling={'cooperative'} shelter={cat.shelter}/>
        </Fragment>

      )
    )
  }
}

export default withUser(withCatPage(CatPageFetcher));