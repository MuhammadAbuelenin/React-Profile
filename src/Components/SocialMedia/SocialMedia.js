import React, { Component } from 'react';
import './SocialMedia.css';
import axios from 'axios'

export default class SocialMedia extends Component {

    state = {
      social: []
    }

    componentDidMount () {
      axios.get('js/data.json').then( res => ( this.setState ({ social : res.data.social})))
    }


  render() {

    const socialMedia = this.state.social.map( (socialItem) => {

        return (
            <div className="social face" key={socialItem.id}>
                <i className={socialItem.icon}></i>
                <p>
                    <span className="info1">{socialItem.title}</span>
                    <span className="info2">{socialItem.body}</span>
                </p>
            </div>
        )
    })

    return (
       <div className="social-media">
              {socialMedia}
        </div>
    )
  }
}

