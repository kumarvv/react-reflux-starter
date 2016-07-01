import React from 'react'; 
import Reflux from 'reflux'; 

import AppActions from './app_action.jsx'; 

let AppStore = Reflux.createStore({
	init() { 
		console.log("initializing AppStore..."); 
		this.listenToMany(AppActions); 

		this.welcome = "Welcome To ReactStarter"; 
		this.features = [ 
			{ key: "react", label: "ReactJS", url: "https://facebook.github.io/react/" }, 
			{ key: "reflux", label: "RefluxJS", url: "https://github.com/reflux/refluxjs" }, 
			{ key: "jquery", label: "jQuery ($)", url: "https://jquery.com/" }, 
			{ key: "lodash", label: "loadsh (_)", url: "https://lodash.com/" }, 
			{ key: "babel", label: "babelify", url: "https://babeljs.io/" }, 
			{ key: "browserify", label: "browserify", url: "http://browserify.org/" }, 
			{ key: "gulp", label: "gulp", url: "http://gulpjs.com/" }, 
			{ key: "semantic", label: "semantic-ui", url: "http://semantic-ui.com/" } 
		];
	},

	onWelcome() { 
		console.log("processing welcome..."); 
		this.trigger("welcome", { 
	      	welcome: this.welcome, 
	      	features: this.features 
        });
	}
}); 

export default AppStore; 