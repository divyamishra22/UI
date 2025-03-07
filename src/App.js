import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadDetails from "./Pages/Check.js"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< LeadDetails/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
