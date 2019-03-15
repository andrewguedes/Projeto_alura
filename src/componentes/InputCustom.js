import React, { Component } from 'react';

class InputCustom extends Component {
    render() {
        return (
            <div className="signup-container-label">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input {...this.props} required />
            </div>
        );
    }
}

export default InputCustom;
