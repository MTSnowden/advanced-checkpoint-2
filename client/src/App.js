import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Buttons from "./components/Buttons"
import Router from "./router.js"
// import { fetchMovies } from './actions';
// import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {

  componentDidMount() {
    // fetchMovies();
  }
  
  render(){
    return (

      <div className='body'>
      <div id="title">
        MY AMAZING MOVIE DATABASE
      </div>

      <BrowserRouter>
        <div>
          <Buttons />
          <Router /> 
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
