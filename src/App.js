import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/blog' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="https://sanity-cms-ivory.vercel.app/" ></Route>
      </Routes>
    </div>
  );
}

export default App;
