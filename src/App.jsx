import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import Coffee from "./components/tools/Coffee";

const App = () => {
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "I'm Here 👋";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  })
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        {/* <Coffee/> */}
        <Routes>
          <Route path='/' element={<About />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                 
                </Routes>
               
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
