import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Plus5"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< Layout/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
