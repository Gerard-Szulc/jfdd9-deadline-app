import React, { Component } from 'react'

const CatPageContext = React.createContext();

export const CatPageConsumer = CatPageContext.Consumer;


export class CatPageProvider extends Component {


  state = {
    favourite: [],
    adopted: [],
    favButtonName: "Polub mnie",
    adoptButtonName: "Adoptuj mnie",
    toggleCatFavorite: (cat) => {
      this.setState( {
        favourite: this.state.favourite.every(element => {return (element.id !== cat.id)}) ? this.state.favourite.concat(cat) : this.state.favourite.filter(element => element.id !== cat.id) },
        this.setState(
         this.state.favourite.every(element =>{return(element.id !== cat.id)}) ? {favButtonName: "Polubiłeś mnie"} : {favButtonName: "Polub mnie"  }))
    },
    // removeFavourite: (cat) => {
    // //
    //   this.setState({
    //     favourite: (this.state.favourite.filter(element => element.id !== cat.id))},
    //     this.setState({
    //       favButtonName: "Polub mnie"
    // //
    //     }))
    // },

    toggleCatAdopted: (cat) => {
      this.setState( {
        adopted: this.state.adopted.every(element => {return (element.id !== cat.id)}) ? this.state.adopted.concat(cat) : this.state.adopted.filter(element => element.id !== cat.id) },
        this.setState(
          this.state.adopted.every(element => {return (element.id !== cat.id)})  ? {adoptButtonName: 'Adoptowałeś mnie'} : {adoptButtonName: 'Adoptuj mnie'}
        )

        );

    },
    // removeAdopted: (cat) => {
    //
    //   this.setState({
    //     adopted: (this.state.adopted.filter(element => element.id !== cat.id))},
    //     this.setState({
    //       adoptButtonName: 'Adoptuj mnie'
    //     })
    //   )
    // },

  };

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