import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserManagement from "./Pages/User"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< UserManagement/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
