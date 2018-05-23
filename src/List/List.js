import React, {Component} from 'react'
import CatContainer from "./CatContainer";
import {withCatPage} from "../CatPage/context/CatPageContext";
import './List.css';
import Pagination from 'react-js-pagination'


class List extends Component {

  state = {
    fetching: false,
    error: null,
    activePage: 1,
  };

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    });

  }

componentDidUpdate(){

}

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  render() {


    const search = this.props.search.reduce(
      (result, next) => {
        const key = Object.keys(next)[0];
        result[key] = next[key];
        return result
      },{}
    );

    console.log(search);
    return (

<div className={"list"}>{


  <Pagination
    activePage={this.state.activePage}
    itemsCountPerPage={5}
    totalItemsCount={this.props.cats.length}
    pageRangeDisplayed={5}
    onChange={this.handlePageChange}
  />}

{this.props.cats ? (this.props.cats.filter(
  cat => (
  (search.selectedSexOption.length !== 0 ? search.selectedSexOption.includes(cat.sex) : true) &&
  (search.selectedRaceOption.length !== 0 ? search.selectedRaceOption.includes(cat.race) : true) &&
  (search.selectedAgeOption.length !== 0 ? search.selectedAgeOption.includes(cat.age) : true) &&
  (search.selectedColorOption.length !== 0 ? search.selectedColorOption.includes(cat.ointment) : true) &&
  (this.props.fetching === false) &&
  (!this.props.adoptionRequests.some(adoptedCat=> adoptedCat.catId === cat.id && adoptedCat.accepted !== false ))
  )
  ).map(
  cat => (<CatContainer cat={cat} key={cat.id}/>)
  )) : 'ŁADOWANIE KOTÓW'}

</div>
    )

  }
}

export default withCatPage(List)