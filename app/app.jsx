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
			return <li key={f.key}><a href={f.url} target='_blank'>{f.label}</a></li>  
		}) : <li></li>;

		return <div className='ui center aligned segment'>
			<h1>{welcome}</h1>
			<h3>Features</h3>
			<div className='ui left aligned segment'>
				<ul>
					{featuresDOM}
				</ul>
			</div>
		</div>; 
	}

	render() { 
		return <div>{this.renderContents()}</div>; 
	}
}

ReactDOM.render(<App/>, document.getElementById('contents'));