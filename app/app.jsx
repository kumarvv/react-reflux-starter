import React from 'react'; 
import ReactDOM from 'react-dom';

class App extends React.Component { 
	constructor() { 
		super();
		this.state = {
			appName : 'ReactStarter' 
		}
	}

	renderContents() { 
		let {appName} = this.state; 

		return <div>
			<h1>Hello, {appName}</h1>
			<p>includes</p>
			<ul>
				<li key='k1'>react</li>
				<li key='k2'>reactDOM</li>
				<li key='k3'>reflux</li>
				<li key='k4'>jQuery ($)</li>
				<li key='k5'>lodash (_)</li>
				<li key='k6'>semantic-ui</li>
			</ul>
		</div>; 
	}

	render() { 
		return <div>{this.renderContents()}</div>; 
	}
}

ReactDOM.render(<App/>, document.getElementById('contents'));
