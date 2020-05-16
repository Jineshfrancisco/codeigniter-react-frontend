import React, { Component } from 'react';

class Welcome extends Component {
	render() {
		const { name, content } = this.props;
		return (
			<div className="container">
				<div className="card text-center">
					<div className="card-block ">
						<h2 className="card-title joe-color ">{name}</h2>
						<h5 className="card-text joe-pink ">{content}</h5>
					</div>
				</div>
			</div>

		);
	}
}

export default Welcome;
