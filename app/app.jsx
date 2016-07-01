import React from 'react'; 
import ReactDOM from 'react-dom';

import AppActions from './app_action.jsx'; 
import AppStore from './app_store.jsx'; 

class App extends React.Component { 
	constructor() { 
		super();
		this.state = {
			welcome: '', 
			features: []  
		}
	}

	componentWillMount() { 
		AppActions.welcome(); 
	}

	componentDidMount() { 
		AppStore.listen(this.onAppStoreChange.bind(this)); 
	}

	onAppStoreChange(event, data) { 
		console.log("processing AppStore event: " + event); 
		switch(event) { 
			case "welcome": 
				this.setState({
					welcome: data.welcome, 
					features: data.features 
				}); 
		}
	}

	renderContents() { 
		let {welcome, features} = this.state; 

		let featuresDOM = features !== undefined ? features.map(f => {
			return <li key={f.key}>{f.label}</li>  
		}) : <li></li>;

		return <div>
			<h1>{welcome}</h1>
			<p>Features:</p>
			<ul>
				{featuresDOM}
			</ul>
		</div>; 
	}

	render() { 
		return <div>{this.renderContents()}</div>; 
	}
}

ReactDOM.render(<App/>, document.getElementById('contents'));