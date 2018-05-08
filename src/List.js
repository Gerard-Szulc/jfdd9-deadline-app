import React, {Component, Fragment} from 'react'
import {DataBase} from './CatBase'


class List extends Component {


  render() {

    const search = this.props.search.reduce(
      (result, next) => {
        const key = Object.keys(next)[0]
        result[key] = next[key]
        return result
      },
          {}

    )
    console.log(search)
    return (
      DataBase.filter(
        cat => (
          (search.selectedSexOption && search.selectedSexOption.includes(cat.sex)) ||
          (search.selectedRaceOption && search.selectedRaceOption.includes(cat.race)) ||
          (search.selectedAgeOption && search.selectedAgeOption.includes(cat.age)) ||
          (search.selectedColorOption && search.selectedColorOption.includes(cat.ointment))

        )
      ).map(
        cat => <p>{cat.name} : {cat.sex} id {cat.id}</p>
      )
    )
    // const pro = () => this.props.search.map(element=>(
    //     {
    //       [Object.keys(element)] : (Object.values(element).join(","))
    //     }
    //   )
    // )
    //
    // const SearchCat = Cats =>
    // Cats.map(cat => (
    //   Object.values(cat))
    // );
    //
    // return (
    //   <div>
    //     {console.log(SearchCat(DataBase))}
    //     {console.log(pro()
    //     )
    //     }
    //   </div>
    // )
  }
}

export default List