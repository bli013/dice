import React, { Component } from 'react'
//import Logger from './Logger.js'
import Roller from './Roller.js'
import './App.css';

class App extends Component{
    constructor(props) {
        super (props)
        this.state = {
            numbers: [1,2,3,4,5,6],
            currentNumber: 0
        }
    }

    rollTheDice = () => {
        let nextNum = Math.floor(Math.random() * this.state.numbers.length)
        this.setState ({ currentNumber: nextNum})
    }
    render() {
        return(
            <div className="App">
            <Roller number={this.state.numbers[this.state.currentNumber]}
            rolls={this.rollTheDice}
            />


            </div>
        );
    }
}
export default App;
