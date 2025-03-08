import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentCalculator from "./Componenets/PaymentModal"


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/view" element={< PaymentCalculator/>} /> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
