import React, { Component } from 'react';

export class TestTriggerFromComponent extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * On click, trigger drop note based on input
     */
    handleClick() {
        if (document.getElementById('in-text').value == "yellow"){
            this.props.UpdateDropNote('yellow', 'Yellow!')
        } else if (document.getElementById('in-text').value == "green") {
            this.props.UpdateDropNote('green', 'Green!')
        } else {
            this.props.UpdateDropNote('red', 'Bad input!!', 1000)
        }
    }

    render() {
        return(
            <div>
                <input id = "in-text"placeholder='Type here'></input>
                <button onClick = {this.handleClick}>Trigger DropNote</button>
            </div>
        );
    }
}