import Footer from './components/Footer';
import Header from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects';
import React ,{ useState } from 'react';
import Contact from './components/Contact';
// import { NavMenu } from './components/Nav/navMenu';

function App() {

// trying to route nav to specific page 
// const [currentPage, setCurrentPage]=useState(navOptions[0])
  const [selected, setSelection]=useState(false)

  function getPage(currentPage) {
    if (currentPage == "#projects") {
      return <> <Projects /> </>;
    } else if(currentPage == "#about"){
      return <> <Header /></>
    }else if(currentPage == "#contact"){
      return <> <Contact/></>
    } else{
      return <> <Header /></>
    }

    //Do something similar for the other pages.
  }
  return (
    <div className="App">
      
   <Nav 
   selected={selected} 
   setSelection={setSelection}
   />
   <main>


   {getPage(selected)}


   </main>

   <Footer />
    </div>
  );
}

export default App;
// upon refreshing nothing happens