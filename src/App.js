import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Pages/plus"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< DashboardLayout/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
