import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomCalendar from "./Componenets/Calendar"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< CustomCalendar/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
