import Footer from './components/Footer';
import Header from './components/About'
import Nav from './components/Nav'
import Projects from './components/Projects';
import React ,{ useState } from 'react';
import Contact from './components/Contact';
// import { NavMenu } from './components/Nav/navMenu';

function App() {
  const {navOptions}=useState([
    {
      option:"Home"
    },
    {
      option:"Projects"
    },  {
      option:"Contact Me"
    }
  ])
// trying to route nav to specific page 
// const [currentPage, setCurrentPage]=useState(navOptions[0])
  const [selected, setSelection]=useState(false)

  return (
    <div className="App">
      
   <Nav 
//    currentPage={currentPage}
// setCurrentPage={setCurrentPage}
   selected={selected} 
   setSelection={setSelection}
   />
   <main>

   {!selected ? (
          <>
            <Header />
          </>
        ) : (
          <>
          <Projects />
          < Contact />
          </>
        )
        }

   </main>
   <Footer />
    </div>
  );
}

export default App;
