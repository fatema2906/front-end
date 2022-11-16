import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';



const Login = () => {

  const navigate = useNavigate();
  const cookies = new Cookies();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');


  const handleError = () => {
    setError(true);


    setTimeout(() => {
      setError(false);

    }, 10000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      handleError();
      return
    }


    fetch('http://localhost:3000/api/dummy-auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then((data) => {
        if (data.message) {
          handleError();
        }
        else {
          cookies.set('EmployeeEmail', email, { path: '/' });
          navigate('/employee-dashboard');
        }
      });

  };



  return (
    <div className='center'>
      <div className='error-box'>
        {error ? <Alert severity="error">Please Enter a valid Email!</Alert> : null}
      </div>
      <div className='Auth-form-container login-container'>
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <div>
                <label>Email address</label>


              </div>

              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter your email"
                value={email} onChange={(e) => setEmail(e.target.value)} onInput={(e) => setError(false)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary login-btn" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


export default Login
