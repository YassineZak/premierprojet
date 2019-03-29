import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Membre from './components/Membre';

const famille = {
  membre1: {
    nom: 'anthony',
    age: 27
  }, 
  membre2: {
    nom: 'Marie',
    age: 27
  },
  membre3: {
    nom: 'eleonor',
    age: 0
  },
  membre4: {
    nom: 'Mocha',
    age: 2
  }
}

let annee = 0

class App extends Component {
  state = {
    famille,
    annee,
    isShow: false
  }

  handleClick = (num) => {
    famille.membre1.age += num
    annee = num
    this.setState({famille, annee})
  }
  handleChange = (event) => {
    const nom  = event.target.value
    famille.membre1.nom = nom
    this.setState({famille})
  }

  componentDidUpdate() {
    const annee  = this.state.annee
    localStorage.setItem('annee', annee)
  }

  componentDidMount() {
    const annee = localStorage.getItem('annee')
    this.setState({annee})
  }
  handleClickDescription = () => {
    const isShow = ! this.state.isShow;
    this.setState({isShow})
  }
  
  

  render() {
    const { titre } = this.props;
    const { famille, isShow } = this.state;
    return (
      <div className="App container">
      <h1>{titre}</h1>
      <input className="form-control col-lg-6 mx-auto" value={ famille.membre1.nom } onChange={this.handleChange} type="text"/>
      <ul className='list-group col-lg-6 mx-auto'>
      <Membre 
        nom={ famille.membre1.nom } 
        age={ famille.membre1.age }
      />

      <Membre 
        nom={ famille.membre2.nom }
        age={ famille.membre2.age } 

      />
      <Membre 
        nom={ famille.membre3.nom } 
        age={ famille.membre3.age } 

      />
      <Membre 
        nom={ famille.membre4.nom }
        age={ famille.membre4.age }
      >
      <button onClick={this.handleClickDescription}>
      {
        isShow ? 'Cacher' : 'Montrer'
      }
      </button>
      {
        isShow ? <div><strong>je suis un chat</strong></div> : null
      }
      </Membre>

      <Button 
        vieillir = {() => this.handleClick(5)}
        annee = {this.state.annee}
      />
      </ul>
      
      </div>
    );
  }
}

export default App;
