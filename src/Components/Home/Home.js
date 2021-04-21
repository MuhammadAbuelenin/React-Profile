import React, { Component } from 'react'
import {HomeImage, HomeInfo, HomeBtn, HomeInfo2, HomeDesc, HomeTitle, HomeYalla} from './style'
import './Home.css';
import './style'


export default class Home extends Component {
  render() {
    return (
       <HomeImage>
            <div className="container">
                <HomeInfo>
                    <HomeTitle>Muhammad Abu-Elenin</HomeTitle>
                    <HomeInfo2>Front-End Developer</HomeInfo2>
                    <HomeDesc>
                        Iam a professional <HomeYalla>UX Designer</HomeYalla> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let's work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn>Let's Begin </HomeBtn>
                </HomeInfo>
            </div>
        </HomeImage>
    )
  }
}

