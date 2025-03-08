import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Componenets/Sidebar"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< Sidebar/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
