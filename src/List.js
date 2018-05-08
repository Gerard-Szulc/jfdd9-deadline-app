import React, {Component} from 'react'

class List extends Component {

  state = {
    cats: [],
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
      cats => this.setState({cats})
    ).catch(
      error => this.setState({
        error,
        fetching: false
      })
    )
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


      // this.state.cats.map(cat=>(<div>{cat.name}</div>))


      this.state.cats.filter(
       cat => (
         (search.selectedSexOption.length !== 0 ? search.selectedSexOption.includes(cat.sex) : true) &&
         (search.selectedRaceOption.length !==0 ? search.selectedRaceOption.includes(cat.race) : true) &&
         (search.selectedAgeOption.length !==0 ? search.selectedAgeOption.includes(cat.age) : true) &&
         (search.selectedColorOption.length !==0 ? search.selectedColorOption.includes(cat.ointment) : true)
       )
      ).map(
       cat =>(<div>{cat.name} {cat.id} </div>)
         //<CatContainer cat={cat}/>)
      )
    )

  }
}

export default List