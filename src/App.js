import React, {Component, Fragment} from 'react';
import NavBar from './NavBar/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './Main'
import FavoriteCats from './FavoriteCats'
import Shelters from './Shelters'
import {UserProvider} from "./User/context/User";
import Profile from './User/UserProfile'
import CatPage from './CatPage/CatPageView'
import {CatPageProvider, withCatPage} from "./CatPage/context/CatPageContext";
import './App.css';
import AddCat from './AddCat'
import ShelterPanel from './User/ShelterPanel'
import AcceptedAdoption from './User/AcceptedAdoption'


class App extends Component {

  state = {
    introPassed: true
  }

  componentDidMount(){
    window.scrollTo(0,-20)
    if (!localStorage.getItem('introPassed')) {
      this.setState({
        introPassed: false
      })
    }
  };

  render() {
    return (
      <UserProvider>
      <CatPageProvider>
      <Router>
        <div className="App">
          {
            this.state.introPassed === false ?
              <div className={'intro'}>
                <h1> Witaj w Cat-Composer</h1>
                <p>Nasza aplikacja ma na celu pomoc w adopcji kotów z trójmiejskich schronisk.</p>
                <button className={'introButton'}
                        onClick={() => this.setState({ introPassed: true },
                          () => localStorage.setItem('introPassed', 'yes'))}>OK</button>
              </div> :
              <Fragment>
                <NavBar/>
                <Route exact path="/" component={Main} />
                <Route exact path="/favorite-cats" component={FavoriteCats} />
                <Route exact path="/shelters" component={Shelters} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/catpage/:catId" component={CatPage}/>
                <Route path="/add-cat" component={AddCat}/>
                <Route path="/shelter-panel" component={ShelterPanel}/>
                <Route path="/accepted-adoption" component={AcceptedAdoption}/>
              </Fragment>
          }

        </div>
      </Router>
      </CatPageProvider>
      </UserProvider>
    )
  }
}

export default withCatPage(App);
