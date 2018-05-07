import React, {Component, Fragment} from 'react'
import {DataBase} from './CatBase'


class List extends Component {


  render() {
    const SearchCat = Cats =>
    Cats.filter(cat => (
      Object.values(cat))
    );

    return (
      <div>
        {console.log(SearchCat(DataBase))}
        {console.log(this.props.search.map(element=>(
          {
            [Object.keys(element)] : (Object.values(element).join(","))
          }
          )
        )
        )
        }
      </div>
    )
  }
}

export default List