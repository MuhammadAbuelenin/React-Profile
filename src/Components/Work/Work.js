import axios from 'axios';
import React, { Component } from 'react';
import './Work.css';


export default class Work extends Component {

    state = {
      works : []
    }

    componentDidMount () {
      axios.get('js/data.json').then( res => { this.setState ({ works : res.data.works})})
    }

  render() {

    const {works} = this.state;
    const workList = works.map( (workItem) => {

      return (
        <div className="part first" key={workItem.id} first={workItem.id}>
                    <i className={workItem.icon_name}></i>
                    <h4 className="part-title">{workItem.title}</h4>
                    <hr className="line"/>
                    <p className="part-desc">{workItem.body}</p>
                </div>
                
      )
    })

    return (
     <div className="work">
            <div className="container">
                <h2 className="work-title"><span className="span">My</span> Work</h2>
                {workList}
            </div>
        </div>
    )
  }
}

