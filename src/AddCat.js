import React, {Component} from 'react'
import firebase from 'firebase';
import cscStyle from './addCat.css';
import {withUser} from "./User/context/User";

class AddCat extends Component {

  state = {
    name: '',
    description: '',
    image: '',
    age: 'poniżej 3 miesięcy',
    ointment: 'Rudy',
    race: 'Dachowiec',
    sex: 'Kotka',
    formError: null,

    shelter: userId => {
        return (
          userId === 'YcFFJByZ6nUuxFfzbvO9jHYUMHJ3'? 'Promyk'
          : userId === 'TFFiewHfyjZxcpo18nPAFb2HyRU2'? 'Ciapkowo'
          : userId === '2nfC3GoY4TRw3v0NDNzctBFJAL02' ? 'Sopot'
          : null
        )
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    firebase.database().ref('/cats').push({
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      age: this.state.age,
      ointment: this.state.ointment,
      race: this.state.race,
      sex: this.state.sex,
      shelter: this.state.shelter(this.props.user.uid)
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  }

  render() {
    return (

      this.props.user && (
      <div className="add-cat-container">
        <div className="add-cat-form">
          <h2>Dodaj kota do adopcji</h2>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Imię kota: </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder={"Imię"}
              required
            />

            <label htmlFor="sex">Płeć: </label>
            <input type="radio" name="sex" value="Kotka" onChange={this.handleChange} required /> Kotka
            <input type="radio" name="sex" value="Kocur" onChange={this.handleChange} /> Kocur

            <label htmlFor="age">Wiek: </label>
            <select name='age' onChange={this.handleChange} required defaultValue="poniżej 3 miesięcy">
              <option value="poniżej 3 miesięcy">mniej niż 3 miesiące</option>
              <option value="poniżej roku">mniej niż rok</option>
              <option value="powyżej roku">więcej niż rok</option>
            </select>

            <label htmlFor="race">Rasa: </label>
            <input type="radio" name="race" value="Dachowiec" checked onChange={this.handleChange} required/> Dachowiec
            <input type="radio" name="race" value="Rasowy" onChange={this.handleChange} /> Rasowy
            {/*{
               this.state.race === 'Rasowy'? (
                 <input
                   name="race"
                   type="text"
                   value={this.state.name}
                   onChange={this.handleChange}
                   placeholder={"rasa kota"}
                   required
                 />
               ) : null
             }*/}

             <label htmlFor="ointment">Umaszczenie: </label>
              <select name='ointment' onChange={this.handleChange} required>
                <option value="Rudy">Rudy</option>
                <option value="Czarny">Czarny</option>
                <option value="Biały">Biały</option>
                <option value="Pręgowany">Pręgowany</option>
                <option value="Mieszany">Mieszany</option>
              </select>

            <label htmlFor="image">Adres url do zdjęcia: </label>
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
              placeholder="http://..."
            /><br/>

            <label htmlFor="description">Opis: </label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Któtki opis zwierzaka (max 500 znaków)"
              maxLength="500"
            /><br />

            <button className="CTA" type="submit">Dodaj</button>
          </form>
        </div>
      </div>
      )
    )
  }
}

export default withUser(AddCat);