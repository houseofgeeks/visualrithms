import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/home";
import BinarySearch from "./components/binarySearch/BinarySearch";
import LinearSearch from "./components/linearSearch/LinearSearch";
import Sort from "./components/sorting/Sort";
function App() {
	return (
		<Router>
			<Navbar />
			<div className="App">
				<Switch>
					<Route exact strict path="/" component={Home} />
					<Route exact strict path="/linearsearch" component={LinearSearch} />
					<Route exact strict path="/binarysearch" component={BinarySearch} />
					<Route exact strict path="/sorting" component={Sort} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
