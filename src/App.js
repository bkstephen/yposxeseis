import React from 'react';
import './bootstrap.css';
import Year2019 from './components/year2019'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends React.Component {
  //update <link> to an additional year
  render() {
    return (
      <Router >
        <nav style={{ overflow: "hidden", top: "0", padding: "10px", color: "white" }} className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="bs-component">            
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link active" to="/2019"> 2019 </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active"> 2020 (soon) </a>
              </li>
            </ul>
            <div style={{ padding: "10px" }}>
            <h3 > Πρόοδος τον υποσχέσεων της κυβέρνησης ανά χρονιά </h3>
          </div>
          </div>
        </nav>
        <Route path="/">
          <Year2019 />
        </Route>
        <footer><a href=""> GitHub </a></footer>
      </Router>
    );
  }
}
