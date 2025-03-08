import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeadsTable from "./Pages/Lead"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< LeadsTable/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
