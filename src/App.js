import './App.css';
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="nicdark_site nicdark_bg_white nicdark_front_page ">
				{/* <Responsive />
				<Header />
				<Tool />
				<Content>
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/home1" exact>
							<Home1 />
						</Route>
						<Route path="/cong-nghe" exact>
							<Technology />
						</Route>
						<Route path="/cong-nghe/cong-nghe-chi-tiet" exact>
							<TechnologyDetails />
						</Route>
						<Route path="/sign-in" exact>
							<Login />
						</Route>
					</Switch>
				</Content>
				<Footer /> */}
				<h1>dddd</h1>
			</div>
		</Router>
	);
}

export default App;
