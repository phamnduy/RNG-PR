import './App.css';
import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/index'
import Home from './components/Home/index'
import styled from 'styled-components';
const AppContainer = styled.div(({ theme }) => ({
	display: "flex",
	justifyContent: 'center',
}));
function App() {
	return (
		<Router>
			<AppContainer >
				<Switch>
					<Route path="/" exact>
						<Login title='WINLUCK'></Login>
					</Route>
					<Route path="/Home" exact>
						<Home ></Home>
					</Route>
				</Switch>
			</AppContainer>
		</Router>
	);
}

export default App;
