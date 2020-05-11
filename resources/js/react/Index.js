import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './src/MyApp';

export default class Index extends Component {
	render() {
		return (
			<React.Fragment>
				<App />
			</React.Fragment>
		);
	}
}

if (document.getElementById('app')) {
	ReactDOM.render(<Index />, document.getElementById('app'));
}
