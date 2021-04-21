import React, { Component } from 'react';
import {AboutImage, AboutInfo, AboutTitle, AboutThis, AboutCreator, AboutDesc, AboutDescA} from './Style'
import './About.css'
import './Style'

export default class About extends Component {
  render() {
    return (
       <AboutImage>
            <div className="container">
                <AboutInfo>
                    <AboutTitle><AboutThis>This is</AboutThis> Me</AboutTitle>
                    <AboutCreator>Front-End Developer</AboutCreator>
                    <AboutDesc>
                        I am a 7 years experienced engineer, Data Analyst with Planning Departments in international companies. I also working as a Front-End Developer.
                    </AboutDesc>
                    <AboutDesc>
                        I am experienced in HTML, CSS, JavaScript, Bootstrap, jQuery, and React. As a senior engineer Data Analyst, I have a good analytical mind, strong problem-solving skills, and the ability to work with big data sets to analyze and prepare reports. also, I have proficiency in Microsoft Office, MS Project, Power BI, and Primavera.  </AboutDesc>
                </AboutInfo>
            </div>
        </AboutImage>
    )
  }
}

