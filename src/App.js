import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Pages/Social"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< Page/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
