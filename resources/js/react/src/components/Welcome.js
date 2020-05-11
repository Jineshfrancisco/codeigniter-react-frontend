import React, { Component } from 'react';

class Welcome extends Component {
	render() {
		const { name, content } = this.props;
		return (
			<div className="container">
				<div className="card text-center">
					<div className="card-block ">
						<h2 className="card-title text-success ">{name}</h2>
						<h5 className="card-text text-danger ">{content}</h5>
					</div>
				</div>
			</div>

		);
	}
}

export default Welcome;
