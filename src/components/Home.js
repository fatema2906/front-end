import React from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();


    const NavigateToEmpolyeeLogin = () => {

        cookies.remove("EmployeeEmail");
        cookies.remove("ManagerEmail");

        navigate('/employee-login');
    };
    const NavigateToAdminLogin = () => {

        cookies.remove("EmployeeEmail");
        cookies.remove("ManagerEmail");

        navigate('/manager-login');
    };


    return (
        <div className='center'>
            <div className='Type-of-user-container center'>
                <button className='User-type-btn' onClick={NavigateToAdminLogin}>
                    Manager
                </button>
                <button className='User-type-btn' onClick={NavigateToEmpolyeeLogin}>
                    Employee
                </button>
            </div>
        </div>
    )
}

export default Home
