import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componenets/Navbar"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< Navbar/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
