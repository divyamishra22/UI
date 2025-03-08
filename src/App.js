import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Componenets/Search"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< SearchBar/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
