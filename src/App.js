import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home'
import EmployeeLogin from './components/EmployeeLogin';
import ManagerLogin from './components/ManagerLogin';
import Employee from './components/Employee';
import Leaves from "./components/Leaves";

// import { useNavigate} from 'react-router-dom';


// import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Cookies from 'universal-cookie';




function App() {
  const cookies = new Cookies();
  // const navigate = useNavigate();


  // const GuardProvider = require('react-router-guards').GuardProvider;
  // const GuardedRoute = require('react-router-guards').GuardedRoute;

  // const requireLogin = (to, from, next) => {
  //   if (to.meta.auth) {
  //     if (cookies.get('EmployeeEmail')) {
  //       next();
  //     }
  //     next.redirect('/');
  //   } else {
  //     next();
  //   }
  // };


  return (
     <BrowserRouter>
         {/* <GuardProvider guards={[requireLogin]}> */}
{/* 
            <Switch>
                <GuardedRoute path="/" exact component={Home} />

                <GuardedRoute path="/employee-login" exact component={EmployeeLogin} />
                <GuardedRoute path="/manager-login" exact component={ManagerLogin} />
                <GuardedRoute path="/employee-dashboard" exact component={Employee} meta={{ auth: true }} />
                <GuardedRoute path="/manager-dashboard"exact component={Manager}  meta={{ auth: true }}/>
            </Switch> */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/manager-login" element={<ManagerLogin />} />
        {/* <Route 
         exact
         path="/employee-dashboard"
         render={() => {
             return (
              cookies.get('EmployeeEmail') ?
              <Navigate to="/employee-dashboard" />:
              <Navigate to="/" />
                //  <Redirect to="/employee-dashboard" /> :
                //  <Redirect to="/" /> 
             )
         }}
        
        /> */}
        {/* {cookies.get('EmployeeEmail') ?  <Route path="/employee-dashboard" element={<Employee />} />
:                 <Route path="/employee-dashboard" element={<Home />} />

} */}

<Route path="/employee-dashboard" element={<Employee />} />
                {/* <Route path="/employee-dashboard" element={<Employee />} /> */}

        <Route path="/manager-dashboard" element={<Leaves />} />
        
      </Routes>
      {/* </GuardProvider> */}
    </BrowserRouter>
    

  );
}

export default App;
