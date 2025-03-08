import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsPage from "./Pages/Account"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< SettingsPage/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
