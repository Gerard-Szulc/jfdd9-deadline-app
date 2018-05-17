import React, {Component, Fragment} from 'react';
import  Shelters from "../Shelters";
import {withCatPage} from "./context/CatPageContext";

class CatPageFetcher extends Component {

  state = {
    cat: null,
  };

  selectOneCat = cats => this.setState({
      cat : cats.find(cat =>
        cat.id === this.props.catId),
    }
  )

  componentDidMount() {
    this.selectOneCat(this.props.cats)
    console.log('ten konkretny kot'+this.state.cat,this.state.cat)
  }

  render() {
    return (
      this.props.fetching === false && (this.state.cat !== null ? (
        <Fragment>
          <div className="CatPage">
            <div className="catDiv">
              <img className="catImage" alt="cat" src={this.state.cat.image}/>
              <button className="catButtons" onClick={()=>this.props.toggleCatFavorite(this.state.cat)}>{
                this.props.favourite.includes(this.state.cat.id) ? 'Polubiłeś mnie' : 'Polub mnie'}</button>
              {(this.props.adoptionRequests.some((adoptedCat) =>
                adoptedCat.catId === this.state.cat.id) ?
                '' :
                <button className="catButtons" onClick={
                  ()=>this.props.toggleCatAdopted(this.state.cat)}>'Adoptuj mnie'
              </button>)
              }

              {
                //<button onClick={()=>this.props.toggleCatAdopted(this.state.cat)}> Odadoptuj mnie </button>
                //<button onClick={()=>this.props.toggleCatFavorite(this.state.cat)}>Już Cię nie lubię</button>
              }
            </div>

            <div className="catDiv">
              <h2>{this.state.cat.name}</h2>
              <p><strong>Płeć:</strong> {this.state.cat.sex}. <strong>Wiek:</strong> {this.state.cat.age}</p>
              <p className="catDescription">
                {this.state.cat.description}
              </p>
              {//<button className="catButtons">adoptButton</button>
                 }
            </div>

          </div>
          <Shelters  gestureHandling={'cooperative'} shelter={this.state.cat.shelter}/>
        </Fragment>

        ) : null)
    )
  }
}

export default withCatPage(CatPageFetcher);