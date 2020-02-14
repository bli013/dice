import React, {Component} from 'react'

export default class Roller extends Component {

    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
                <button onClick= {this.props.rolls}> Roll the Dice </button>

            </div>
        )
    }
}
