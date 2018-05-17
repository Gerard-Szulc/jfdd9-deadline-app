import React, { Component } from 'react'
import firebase from 'firebase'


const CatPageContext = React.createContext();
export const CatPageConsumer = CatPageContext.Consumer;
export class CatPageProvider extends Component {


  state = {
    cats: [],
    fetching: false,
    error: null,
    favourite: [],
    adoptionRequests: [],
    favButtonName: "Polub mnie",
    adoptButtonName: "Adoptuj mnie",
    toggleCatFavorite: (cat) => {
      this.setState({
        favourite: this.state.favourite.includes(cat.id) ? this.state.favourite.filter(catId => catId !== cat.id) : this.state.favourite.concat(cat.id)
      })
    },

    toggleCatAdopted: (cat) => {
      this.setState({
        fetching: true,
        adoptionRequests: this.state.adoptionRequests.some((adoptedCat) => adoptedCat.catId === cat.id) ?
          firebase.database().ref('/adoptionRequests/'+cat.id).remove()  :
          firebase.database().ref('/adoptionRequests').child(cat.id).set({
            catId: cat.id,
            accepted: false,
            //user: currentUser
          })

      });

    },

  };

  handleCatsSnapshot = snapshot => {
    const cats = [];
    snapshot.forEach(
      element => {
        cats.push({
          id: element.key,
          ...element.val()
        })
      }
    )
    this.setState({
      cats: cats,
      fetching: false
    },console.log(this.state.cats))
  }

  handleAdoptedSnapshot = snapshot => {
    snapshot.val() !== null && Object.entries(snapshot.val()).forEach(
      ([id,value]) => {
        this.state.adoptionRequests.push({
          catId: id,
          accepted: value.accepted
        })
      }
    )
    console.log(this.state.adoptionRequests)
    this.setState({
      fetching: false
    }
  )
  }

  componentDidMount() {
    this.unsubscribeCats = firebase.database().ref('/cats').on('value', this.handleCatsSnapshot);
    this.unsubscribeAdoptionRequests = firebase.database().ref('/adoptionRequests').on('value',this.handleAdoptedSnapshot)
    this.setState({
      fetching: true,
      error: null
    });
  }
  componentWillUnmount(){
    this.unsubscribeAdoptionRequests.off('value', this.handleAdoptedSnapshot)
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