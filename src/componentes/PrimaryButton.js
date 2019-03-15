import React, { Component } from 'react';

export default class PrimaryButton extends Component {
	render() {
		return (
			<div>
				<label></label>
				<button {...this.props}>{this.props.label}</button>
			</div>
		);
	}
}