import './App.css';
import Navbar from "./components/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Me from './pages/Me'
//import Dog from './pages/Dog'
import Projects from './pages/Projects'
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "Projects" element={<Projects />}/>
        <Route path = "/" element={<Me />}/>
      </Routes>
    </Router>
  );
}

export default App;
