import React, {Component} from 'react';
import './CatPage.css';


class CatPage extends Component {

  state = {
    cat: null,
    fetching: false,
    error: null
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
          cat.id.toString() === this.props.match.params.catId),
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
      <div className="CatPage">
        <div className="catDiv">
          <button className="catButtons">catFavorite</button>
        </div>
        <div className="catDiv">
          <p className="catDescription">
            {this.state.cat !== null ?
              this.state.cat.description : null
            }
          </p>
          <button className="catButtons">adoptButton</button>
          <button className="catButtons">calendarButton</button>
        </div>
      </div>
    )
  }
}

export default CatPage;