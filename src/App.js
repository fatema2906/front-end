import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import EmployeeLogin from './components/EmployeeLogin';
import ManagerLogin from './components/ManagerLogin';
import Employee from './components/Employee';
import Leaves from "./components/Leaves";





function App() {



  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        <Route path="/employee-dashboard" element={<Employee />} />
        <Route path="/manager-dashboard" element={<Leaves />} />

      </Routes>
    </BrowserRouter>


  );
}

export default App;
