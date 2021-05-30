import React, { Component } from 'react'
// import {HomeImage, HomeInfo, HomeBtn, HomeInfo2, HomeDesc, HomeTitle, HomeYalla} from './style'
import './Home.css';
import './style';
import img1 from '../../img/home-bg.jpg'


export default class Home extends Component {
  render() {
    return (
       <div className="home-image">
          <img src={img1}/>
            <div className="container">
                <div className="home-info">
                    <h2 className="home-title">Muhammad Abu-Elenin</h2>
                    <h4 className="home-info2">Front-End Developer</h4>
                    <p className="home-desc">
                        Iam a professional <span className="Home-span">UX Designer</span> and Front-End Developer creating modern and 
                        resposive designs to Web and Mobile. Lets work together. Thank you. 
                    </p>
                    <button className="home-btn">Lets Begin </button>
                </div>
            </div>
        </div>
    )
  }
}

