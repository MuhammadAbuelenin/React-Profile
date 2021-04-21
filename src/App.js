import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar'
import Index from './Components/Index/Index';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Navbar />
         
        <Route path="/" exact component={Index} />
        <Route path="/contact" component={Contact} />

      </BrowserRouter>
    )
  }
}
