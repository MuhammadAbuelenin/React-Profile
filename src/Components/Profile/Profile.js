import React, { Component } from 'react'
import './Profile.css'

export default class Profile extends Component {
  render() {
    return (
     <div className="profile_skills">
            <div className="container">
                <div className="profile">
                    <h2 className="profile-title"><span className="span1">My </span>Profile</h2>
                    <ul className="profile-list">
                        <li className="profile-item">
                            <span>Name</span>
                            Muhammad Abu-Elenin
                        </li>
                       
                        <li className="profile-item">
                            <span>Address</span>
                            Turkey
                        </li>
                        <li className="profile-item">
                            <span>Phone</span>
                            +90 544 367 1415
                        </li>
                        <li className="profile-item">
                            <span>Email</span>
                            MuhammadAbuelenin@gmail.com
                        </li>
                        <li className="profile-item">
                            <span>Website</span>
                            <span className="web">www.github.com/MuhammadAbuelenin</span>
                        </li>
                    </ul>
                </div>
                
                <div className="skills">
                    <h2 className="skills-title"> <span className="span">My</span> skills</h2>
                    <p className="skills-desc">
                    HTML5, CSS3, Bootstrap, JavaScript, ECMAScript, jQuery, SASS and React.
                    </p>
                    <div className="bar">
                        <span className="title">React</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Bootstrap</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">CSS</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
  }
}

