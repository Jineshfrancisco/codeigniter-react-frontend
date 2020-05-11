import React, { Component } from 'react';
import Welcome from './components/Welcome';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Welcome name="Codeigniter - React Application" content="" />
				<Welcome
					name=""
					content="A Simple React Frontend Scaffolding for Codeigniter with Bootstrap "
				/>
				<Welcome
					name="Version 3.1.11"
					content="Build on Top CodeIgniter Version 3.1.11"
				/>
				<Welcome
					name="Hello All..., Have a Nice Day"
					content="created by Jinesh Francisco"
				/>
			</React.Fragment>
		);
	}
}

export default App;
