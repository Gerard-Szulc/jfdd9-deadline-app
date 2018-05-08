import React, {Component, Fragment} from 'react';
import  Shelters from "../Shelters";

class CatPageFetcher extends Component {

  state = {
    cat: null,
    fetching: false,
    error: null,
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })
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
              <img class="catImage" alt="cat" src={this.state.cat.image}/>
              <button className="catButtons">catFavorite</button>
            </div>

            <div className="catDiv">
              <h2>{this.state.cat.name}</h2>
              <p className="catDescription">
                {this.state.cat.description}
              </p>
              <button className="catButtons">adoptButton</button>
              <button className="catButtons">calendarButton</button>
            </div>

          </div>
          <Shelters shelter={this.state.cat.shelter}/>
        </Fragment>

        ) : null
    )
  }
}

export default CatPageFetcher;