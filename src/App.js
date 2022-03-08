import Footer from "./components/Footer";
import Header from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const [selected, setSelection] = useState(false);

  return (
    <div className="App bg-dark">
      <Router>
        <Nav selected={selected} setSelection={setSelection} />
        <main>
          <div className="container">
            <Switch>
              <Route exact path="/react-portfolio" component={Header} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>{" "}
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
// upon refreshing nothing happens
