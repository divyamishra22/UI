import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Glance"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< Dashboard/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
