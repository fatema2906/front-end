import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Cookies from 'universal-cookie';
import 'react-calendar/dist/Calendar.css';



const Employee = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(false);
  const [pendingError, setPendingError] = useState(false);
  const [success, setSucess] = useState(false);
  const cookies = new Cookies();


  const onChange = (e) => {
    setStartDate(e[0]);
    setEndDate(e[1]);
    setError(false);
    setPendingError(false);
    setSucess(false);
    console.log("email=", cookies.get('EmployeeEmail'))

  };
  const handleError = () => {
    setError(true);


    setTimeout(() => {
      setError(false);

    }, 1000)
  }

  const handlePendingError = () => {
    setPendingError(true);


    setTimeout(() => {
      setPendingError(false);

    }, 1000)
  }

  const handleSuccess = () => {
    setSucess(true);


    setTimeout(() => {
      setSucess(false);

    }, 50000)
  }


  const handleSubmit = (e) => {
    console.log("start date", startDate);
    e.preventDefault();
    if (!startDate || !endDate) {
      handleError();
      return
    }


    fetch('http://localhost:3000/api/leaves', {
      method: 'POST',
      body: JSON.stringify({
        startOn: startDate,
        endsOn: endDate,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        email: cookies.get('EmployeeEmail'),
      },

    })
      .then(res => res.json())
      .then((data) => {
        if (data.message) {
          handlePendingError();
        }
        else {
          handleSuccess();
        }
      });

  };
  return (
    <div>

      <div className='center'>
        <div className='error-box'>
          {error ? <Alert severity="error">Please Select a valid Range!</Alert> : null}
          {pendingError ? <Alert severity="error">Request is pending to be approval!</Alert> : null}
          {success ? <Alert severity="success">Your Request Has Submit!</Alert> : null}

        </div>
        <div className='Auth-form-container login-container'>
          <div className='user-form-container'>
            <div className='request-container'>
              <h2>Request for an annual leave </h2>
              <Calendar onChange={onChange} selectRange={true}
                minDate={new Date()} />
              <button type="submit" className="btn btn-primary login-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Employee
