import React, {Component} from 'react'
import firebase from 'firebase';

class AddCat extends Component {

  state = {
    name: '',
    description: '',
    image: '',
    age: '',
    ointment: '',
    race: '',
    sex: '',
    formError: null
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
      <div className="add-cat-form">

        <form onSubmit={this.handleSubmit}>
          <label>Imię kota </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div>
            <label>Płeć </label>
            <input type="radio" name="sex" value="Kotka" onChange={this.handleChange} /> Kotka
            <input type="radio" name="sex" value="Kocur" onChange={this.handleChange} /> Kocur


            <label>Wiek </label>
            <input type="radio" name="age" value="poniżej" onChange={this.handleChange}/> poniżej 3 miesięcy
            <input type="radio" name="age" value="poniżej roku" onChange={this.handleChange}/> poniżej roku
            <input type="radio" name="age" value="powyżej roku" onChange={this.handleChange}/> powyżej roku
          </div>

          <div>
            <label>Rasa </label>
            <input type="radio" name="race" value="Dachowiec" checked onChange={this.handleChange}/> Dachowiec
            <input type="radio" name="race" value="Rasowy" onChange={this.handleChange} /> Rasowy

            <label>Umaszczenie </label>
            <select name='ointment' multiple onChange={this.handleChange}>
              <option value="Rudy">Rudy</option>
              <option value="Czarny">Czarny</option>
              <option value="Biały">Biały</option>
              <option value="Pręgowany">Pręgowany</option>
              <option value="Mieszany">Mieszany</option>
            </select>
          </div>

          <label>Adres url do zdjęcia </label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />

          <label>Opis</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <button type="submit">Dodaj</button>
        </form>
      </div>
    )
  }
}

export default AddCat;