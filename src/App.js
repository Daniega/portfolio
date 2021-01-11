import React from 'react';
import './App.css';

import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import IntroHeading from './components/intro-heading/intro-heading.component';
import Skills from './components/skills/skills.component';

const App = () => {
	return (
		<div className="App">
			<Header />
			<IntroHeading />
			<Skills />
			<Footer />
		</div>
	);
};

export default App;
