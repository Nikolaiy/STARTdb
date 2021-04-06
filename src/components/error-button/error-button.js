import React, {Component} from 'react';

import './error-button.css'


export default class ErrorButton extends Component {
    state = {
        error: false
    }

    render() {

        if(this.state.error) {
            this.props.foo = 0
        }

        return (
            <button className='btn btn-danger mt-2' onClick={() => this.setState({error: true})}>
                HasError
            </button>
        )
    }

}