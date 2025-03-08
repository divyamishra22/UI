import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./Pages/Inventory"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< Table/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
