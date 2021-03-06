import React, { Component } from 'react';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';
import Timer from '../../components/Timer/Timer';
import {Link } from 'react-router-dom';


class Feelings3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
        feelings3Title: "Visualization Exercise",
        feelings3Txt1: "1. Imagine feeling incredibly proud of yourself",
        feelings3Txt2: "2. Imagine feeling incredibly happy about something",
        feelings3Instr: "When you're ready, start the 2 minute timer and hold those feelings inside",
        startBtn: "Start",
        results1Btn: "Next",        
      }
    }
    render() {
      return (
        <div className="container">
          <div className="row center-align">
              <div><TextLines text={this.state.feelings3Title} /></div>
          </div>    
          <div className="row center-align">
              <ul className="thoughts3">
                  <li>{this.state.feelings3Txt1}</li>
                  <li>{this.state.feelings3Txt2}</li>
              </ul>
          </div>  
          <div className="row center-align">  
              <div><TextLines  text={this.state.feelings3Instr} /></div>
              <div><Timer  /></div>
              <div><Link to="/results1"><Button label={this.state.results1Btn}/></Link></div>
          </div>
        </div>
      )
    }
  }

export default Feelings3;
