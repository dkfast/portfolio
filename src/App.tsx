import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Education from './components/Education';
import Experience from './components/Experience';


function App() {
  return (
    <div className="App bg-gradient-to-b from-red-500 via-orange-500 via-yellow-500 via-amber-500 to-fuchsia-500">

      <Router>
        {/* <ScrollToTop /> */}
        <Header />
        <About />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </Router>

    </div>
  );
}

export default App;
