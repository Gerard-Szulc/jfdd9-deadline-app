import React, {Component, Fragment} from 'react';
import Shelters from "../Shelters";
import {withCatPage} from "./context/CatPageContext";
import {withUser} from '../User/context/User'
import { Link }from 'react-router-dom'


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
            <div className="catDiv">
              <img className="catImage" alt="cat" src={cat.image === "" ? catImage : cat.image}/>

              {this.props.user === null ?  <button className="catButtons"> <Link to="/profile" className='catButtons'>Zaloguj się</Link></button> :
                ( isFavourite ?
                  <button className="catButtons" onClick={() => this.props.toggleCatFavorite(cat)}> Odlub mnie
                  </button>
                  :
                  <button className="catButtons" onClick={
                      () => this.props.toggleCatFavorite(cat)}> Polub mnie
                    </button>)}





              {this.props.user !== null &&
                (!adoptionRequest ?
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
              <p><strong>Płeć:</strong> {cat.sex} <strong>Wiek:</strong> {cat.age}</p>
              <p className="catDescription">
                {cat.description}
              </p>

            </div>

          </div>
          <div style={{ position: 'relative', height: '60vh'}}>
          <Shelters gestureHandling={'cooperative'} shelter={cat.shelter}/>
          </div>
        </Fragment>

      )
    )
  }
}

export default withUser(withCatPage(CatPageFetcher));