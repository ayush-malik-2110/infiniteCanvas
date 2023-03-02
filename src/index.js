
import ReactDOM from 'react-dom';
import React from 'react';
import HomePage from './components/HomePage';

/**
 * Initialize the app.
 */
const initializeApp = () => {
	const wrapper = document.getElementById('container');
	wrapper
		? ReactDOM.render(
			<HomePage />,
				wrapper
		  )
		: false;
};

initializeApp();
