import Footer from "./components/Footer";
import Header from "./components/About";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import React, { useState, useEffect } from "react";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/Resume";

// import { NavMenu } from './components/Nav/navMenu';

function App() {
  // trying to route nav to specific page
  // const [currentPage, setCurrentPage]=useState(navOptions[0])
  const [selected, setSelection] = useState(false);
  // console.log(window.location)
  // useEffect(() => {
  //   setSelection(window.location.hash);
  // }, []);

  return (
    <div className="App bg-dark">
      <Router>
        <Nav selected={selected} setSelection={setSelection} />
        <main className="">
          {/* <Header/> */}
          <div className="container">
            <Switch>
              <Route exact path="/react-portfolio" component={Header} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/resume" component={Resume} />

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
