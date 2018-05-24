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

  componentDidUpdate() {

  }

  handlePageChange = (pageNumber) => {
    this.setState({activePage: pageNumber});
  }

  render() {
    const search = this.props.search.reduce(
      (result, next) => {
        const key = Object.keys(next)[0];
        result[key] = next[key];
        return result
      }, {}
    );

    const resultSearch = this.props.cats && this.props.cats.filter(
      cat => (
        (search.selectedSexOption.length !== 0 ? search.selectedSexOption.includes(cat.sex) : true) &&
        (search.selectedRaceOption.length !== 0 ? search.selectedRaceOption.includes(cat.race) : true) &&
        (search.selectedAgeOption.length !== 0 ? search.selectedAgeOption.includes(cat.age) : true) &&
        (search.selectedColorOption.length !== 0 ? search.selectedColorOption.includes(cat.ointment) : true) &&
        (this.props.fetching === false) &&
        (!this.props.adoptionRequests.some(adoptedCat => adoptedCat.catId === cat.id && adoptedCat.accepted !== false))
      ))


    console.log(search);
    return (

      <div className={"list"}>


        {this.props.cats ? (resultSearch).slice((this.state.activePage - 1) * 5, this.state.activePage * 5).map(
          cat => (<CatContainer cat={cat} key={cat.id}/>)
        ) : 'ŁADOWANIE KOTÓW'}

        <div className='pagination>'>
          <Pagination
            hideDisabled
            activePage={this.state.activePage}
            itemsCountPerPage={5}
            totalItemsCount={resultSearch.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </div>


      </div>
    )

  }
}

export default withCatPage(List)