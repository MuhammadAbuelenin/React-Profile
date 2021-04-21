import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';




export default class Navbar extends Component {
  render() {
    return (
  <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">React Portfolio</h2>
                </div>
                
                <ul className="ul-list">
                    <li className="list-item"><Link to="/">Home</Link></li>
                    <li className="list-item"><Link to="/">Work</Link></li>
                    <li className="list-item"><Link to="/">Portfolio</Link></li>
                    <li className="list-item"><Link to="/">Resume</Link></li>
                    <li className="list-item"><Link to="/">About</Link></li>
                    <li className="list-item"><Link to="/contact">Contact</Link></li>
                </ul>
                
            </div>
            
        </div>
        
    )
  }
}

