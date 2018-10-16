import React, { Component } from 'react';
import TextLines from '../../components/TextLines/TextLines';
import Button from '../../components/Button/Button';
import Timer from '../../components/Timer/Timer';
import {Link } from 'react-router-dom';


class Thoughts3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
        thoughts3Title: "Positive Affirmations",
        thoughts3Txt1: "My strength is greater than my struggle",
        thoughts3Txt2: "I am fearless",
        thoughts3Txt3: "I'm getting stronger everyday",
        thoughts3Txt4: "I was not made to give up",
        thoughts3Txt5: "I am a warrior",
        thoughts3Txt6: "I have the power to change my story",
        thoughts3Txt7: "Challenges are opportunities",
        thoughts3Txt8: "I choose what I become",
        thoughts3Instr: "REPEAT THESE FOR TWO MINUTES",
        startBtn: "Start",
        results1Btn: "Next",        
      }
    }
    render() {
      return (
        <div className="row center-align">
            <div className="row"><TextLines text={this.state.thoughts3Title} /></div>
            <ul>
                <li>{this.state.thoughts3Txt1}</li>
                <li>{this.state.thoughts3Txt2}</li>
                <li>{this.state.thoughts3Txt3}</li>
                <li>{this.state.thoughts3Txt4}</li>
                <li>{this.state.thoughts3Txt5}</li>
                <li>{this.state.thoughts3Txt6} </li>
                <li>{this.state.thoughts3Txt7}</li>
                <li>{this.state.thoughts3Txt8} </li>
            </ul>
            <div className="row"><TextLines  text={this.state.thoughts3Instr} /></div>
            <div ><Timer  /></div>
            <div className="row"><Link to="/results1"><Button label={this.state.results1Btn}/></Link></div>
        </div>
      )
    }
  }

export default Thoughts3;