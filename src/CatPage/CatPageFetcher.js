import React, {Component, Fragment} from 'react';
import Shelters from "../Shelters";
import {withCatPage} from "./context/CatPageContext";
import {withUser} from '../User/context/User'
import { Link }from 'react-router-dom'
import faMars from "@fortawesome/fontawesome-free-solid/faMars";
import faVenus from "@fortawesome/fontawesome-free-solid/faVenus";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class CatPageFetcher extends Component {


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

    const isFavourite = this.props.favourite && Object.entries(this.props.favourite).find(([key,value]) => key === cat.id && value === true)
    const catImage = 'http://athomeintn.com/wp-content/uploads/drawn-feline-cute-kitty-pencil-and-in-color-drawn-feline-cute-kitty-cute-cat-drawing.jpg'

    return (
      this.props.fetching === false && cat && (
        <Fragment>
          <div className="CatPage container">
            <div className="catDiv catDiv-image">
              <img className="catImage" alt="cat" src={cat.image === "" ? catImage : cat.image}/>
            </div>

            <div className="catDiv catDescription">
              <h2>{cat.name}</h2>
              {
                cat.sex === 'Kotka' ?
                  <FontAwesomeIcon icon={faVenus} className="iconVenus"/>
                  : <FontAwesomeIcon icon={faMars} className="iconMars" />
              }
              <p><strong>Płeć:</strong> {cat.sex} <strong>Wiek:</strong> {cat.age}</p>
              <p className="catDescription">
                {cat.description}
              </p>

              {this.props.user === null ?  <button className="CTA CTA-blue"> <Link to="/profile" className='catButtons'>Zaloguj się</Link></button> :
                ( isFavourite ?
                  <button className="CTA" onClick={() => this.props.toggleCatFavorite(cat)}> Odlub mnie
                  </button>
                  :
                  <button className="CTA" onClick={
                    () => this.props.toggleCatFavorite(cat)}> Polub mnie
                  </button>)}





              {this.props.user !== null &&
              (!adoptionRequest ?
                  <button className="CTA CTA-blue" onClick={
                    () => this.props.toggleCatAdopted(cat)}> Adoptuj mnie
                  </button> : (
                    adoptionRequest.accepted === false  ? 'Kot czeka na akceptację adopcji przez schronisko' : (
                      adoptionRequest.user === this.props.user.uid ? 'To twój kot' : 'Kota nie ma'
                    )
                  )
              )
              }

            </div>

          </div>
          <div className="map-cat-location">
            <Shelters gestureHandling={'cooperative'} shelter={cat.shelter}/>
          </div>
        </Fragment>

      )
    )
  }
}

export default withUser(withCatPage(CatPageFetcher));