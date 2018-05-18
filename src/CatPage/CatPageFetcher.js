import React, {Component, Fragment} from 'react';
import  Shelters from "../Shelters";
import {withCatPage} from "./context/CatPageContext";

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


    return (
      this.props.fetching === false && cat && (
        <Fragment>
          <div className="CatPage">
            <div className="catDiv">
              <img className="catImage" alt="cat" src={cat.image}/>
              <button className="catButtons" onClick={()=>this.props.toggleCatFavorite(cat)}>{
                this.props.favourite.includes(cat.id) ? 'Polubiłeś mnie' : 'Polub mnie'}</button>
              {(this.props.adoptionRequests.some((adoptedCat) =>
                adoptedCat.catId ===cat.id) ?
                '' :
                (<button className="catButtons" onClick={
                  ()=>this.props.toggleCatAdopted(cat)}> Adoptuj mnie
              </button>))
              }
              {
                (this.props.adoptionRequests.some((adoptedCat) =>
                  adoptedCat.catId ===cat.id && adoptedCat.accepted === false) && 'Kot czeka na akceptację adopcji przez schronisko')
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
          <Shelters  gestureHandling={'cooperative'} shelter={cat.shelter}/>
        </Fragment>

        )
    )
  }
}

export default withCatPage(CatPageFetcher);