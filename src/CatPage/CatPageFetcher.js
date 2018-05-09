import React, {Component, Fragment} from 'react';
import  Shelters from "../Shelters";
import {withCatPage} from "./context/CatPageContext";

class CatPageFetcher extends Component {

  state = {
    cat: null,
    fetching: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    });
    fetch(
      process.env.PUBLIC_URL + '/cats.json'
    ).then(
      response => response.json()
    ).then(
      cats => this.setState({
        cat : cats.find(cat =>
          cat.id.toString() === this.props.catId),
        fetching: false
      })
    ).catch(
      error => this.setState({
        error,
        fetching: false
      })
    )
  }

  render() {
    return (

      this.state.cat !== null ? (
        <Fragment>
          <div className="CatPage">
            <div className="catDiv">
              <img className="catImage" alt="cat" src={this.state.cat.image}/>
              <button className="catButtons" onClick={()=>this.props.makeCatFavorite(this.state.cat)}>{this.props.favButtonName}</button>
              <button className="catButtons" onClick={()=>this.props.makeCatAdopted(this.state.cat)}>{this.props.adoptButtonName}</button>
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
          <Shelters shelter={this.state.cat.shelter}/>
        </Fragment>

        ) : null
    )
  }
}

export default withCatPage(CatPageFetcher);