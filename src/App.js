import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmailChannel from "./Pages/Userinteg"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< EmailChannel/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
