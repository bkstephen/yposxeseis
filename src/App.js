import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Year2019 from './components/year2019'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                <Navbar>
                    <div class="bs-component">
                        <Nav variant="tabs" as="ul">
                            <Nav.Item as="li">
                                <Link className="nav-link active" to="/2019"> 2019 </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className="nav-link disabled" to="#"> 2020 (soon) </Link>
                            </Nav.Item>
                        </Nav>
                        <div style={{ padding: "10px" }}>
                            <h3 > Πρόοδος τον υποσχέσεων της κυβέρνησης ανά χρονιά </h3>
                        </div>
                    </div>
                </Navbar>
                <Route path="/">
                    <Year2019 />
                </Route>
                <footer style={{ fontSize: "25px" }}><a href="https://github.com/bkstephen/yposxeseis"> GitHub </a></footer>
            </Router>
        );
    }
}
