import React, { Component } from 'react'
import firebase from 'firebase'
const CatPageContext = React.createContext();

export const CatPageConsumer = CatPageContext.Consumer;


export class CatPageProvider extends Component {


  state = {
    cats: null,
    fetching: false,
    error: null,
    favourite: [],
    adopted: [],
    adoptionRequests: {},
    favButtonName: "Polub mnie",
    adoptButtonName: "Adoptuj mnie",
    toggleCatFavorite: (cat) => {
      this.setState({
        favourite: this.state.favourite.includes(cat.id) ? this.state.favourite.filter(catId => catId !== cat.id) : this.state.favourite.concat(cat.id)
      })
    },

    toggleCatAdopted: (cat) => {
      this.setState( {
        adopted: this.state.adopted.includes(cat.id) ? this.state.adopted.filter(catId => catId !== cat.id) : this.state.adopted.concat(cat.id) }

        );

    },

  };
  handleSnapshot = snapshot => {
    const cats = [];
    snapshot.forEach(
      cat => {
        cats.push(cat)
      }
    )
    this.setState({
      cats: cats
    })
  }
  componentDidMount() {
    this.unsubscribe = firebase.database.ref('/cats/').on('value', this.handleSnapshot);
    this.setState({
      fetching: true,
      error: null
    });
  }

  render() {
    return (
      <CatPageContext.Provider value={this.state}>
        {this.props.children}
      </CatPageContext.Provider>
    )
  }
}

export function withCatPage(Component) {
  function CatPageAwareComponent(props) {
    return (

      <CatPageConsumer>
        {
          state => <Component {...props} {...state}/>
        }
      </CatPageConsumer>
    )
  }
  CatPageAwareComponent.displayName= `CatPageAware(${Component.displayName || Component.name || 'Component'}`;

  return CatPageAwareComponent
}