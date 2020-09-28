import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BinarySearch from "./components/binarySearch/BinarySearch";
import LinearSearch from "./components/linearSearch/LinearSearch";

function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{ height: "100px", padding: "10px", color: "#1b1" }}>
          <div style={{ display: "inline-block", fontSize: "2em" }}>
            <Link style={{color: "#1b1"}} to="/">Visualrithms</Link>
          </div>
          <div
            style={{
              display: "inline-block",
              float: "right",
              fontSize: "1.3em",
            }}
          >
            <div style={{ display: "inline-block", margin: "5px" }}>
              <Link style={{color: "#1b1", margin: "5px"}} to="/linearsearch">LinearSearch</Link>
              <Link style={{color: "#1b1", margin: "5px"}} to="/binarysearch">BinarySearch</Link>
            </div>
          </div>
        </nav>
        <center>
          <Switch>
            <Route exact strict path="/"/>
            <Route exact strict path="/linearsearch" component={LinearSearch} />
            <Route exact strict path="/binarysearch" component={BinarySearch} />
          </Switch>
        </center>
      </Router>
    </div>
  );
}

export default App;
