import React, {com} from 'react';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';



const Manager = () => {

  const cookies = new Cookies();


  const getLeaves = async () => {
    const res = await fetch('http://localhost:3000/api/leaves', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        email: cookies.get('ManagerEmail'),
      },

    });
    const data =  await res.json();
    
    const leaves = data.data;
    console.log(leaves);

  }

  useEffect(() => {
    getLeaves();
  }, []);

  return (
    <div>
      {/* <div className='user-container'>
          <div className='user-name'>
                Welcome Fatima
          </div>
        </div> */}

      <div className='center'>
        <div className='Auth-form-container'>
          <div className='user-form-container'>
            <div className='request-container'>
              <h2>Request for an annual leave</h2>
                {/* {leaves.forEach(element => {
                    <div className='list-of-users'>
                    <div>{element.startOn}</div>
                    <div>Ali</div>
                    <div>Jana</div>
                    <div>
                      <button type="submit" onClick={getLeaves} className="btn btn-primary login-btn">
                        Approve
                      </button>
                      <button type="submit" className="btn btn-primary login-btn">
                        Disapprove
                      </button>
                    </div>
                  </div>
               })}  */}
               {console.log("hello")}
              
 
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Manager
