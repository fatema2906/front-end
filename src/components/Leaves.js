import React, { Component } from 'react'
import axios from 'axios'
import Alert from '@mui/material/Alert';

import Cookies from 'universal-cookie';


class Leaves extends Component {

    constructor(props) {
        super(props)
        this.approve = this.approve.bind(this);
        this.state = {
            leaves: [],
            approved: false,
            rejected: false,
        }

    }

    async getLeaves() {
        const cookies = new Cookies();

        const response = await axios.get('http://localhost:3000/api/leaves',
            { headers: { 'email': cookies.get('ManagerEmail') } })
        this.setState({ leaves: response.data.data });
    }


    async approveLeave(id, status) {
        const cookies = new Cookies();

        console.log("manager email", cookies.get('ManagerEmail'));
        const body = { leaveId: id, status: status };
        const response = await axios.put('http://localhost:3000/api/leaves', body);

        if (status === 'APPROVED') {
            this.setState({
                rejected: false
            });
            this.handleApprove();
        }
        else if (status === 'REJECTED') {
            this.setState({
                approved: false
            });
            this.handleReject();
        }

        this.setState({
            leaves: this.state.leaves.filter(element => element.leaveId !== id)
        });

    }

    handleApprove = () => {
        this.setState({
            approved: true
        });


        setTimeout(() => {
            this.setState({
                approved: false
            });

        }, 10000)
    }

    handleReject = () => {
        this.setState({
            rejected: true
        });


        setTimeout(() => {
            this.setState({
                rejected: false
            });

        }, 10000)
    }

    approve(id, status) {
        this.approveLeave(id, status);
    }

    componentDidMount() {
        this.getLeaves()
    }

    render() {
        return (
            <div>
                <div className='center'>
                    <div className='error-box'>
                        {this.state.approved ? <Alert severity="success">The Request Has Approved!</Alert> : null}
                        {this.state.rejected ? <Alert severity="success">The Request Has Rejected!</Alert> : null}

                    </div>
                    <div className='Auth-form-container login-container'>
                        <div className='user-form-container'>
                            <div className='request-container'>
                                <h2>Request for an annual leave</h2>
                                {
                                    this.state.leaves.map((lev) => {
                                        return (

                                            lev.status === 'PENDING' ?
                                                <div className='list-of-users' todo={lev} key={lev.leaveId}>
                                                    <div className='leave-user-name'>
                                                        {lev.Employee.name}
                                                    </div>
                                                    <div>Start date: {lev.startOn.substring(0, 10)}</div>
                                                    <div className='leave-end-date'>End date: {lev.endsOn.substring(0, 10)}</div>

                                                    <div>
                                                        <button type="submit" className="btn btn-primary login-btn" onClick={event => this.approve(lev.leaveId, 'APPROVED')}>
                                                            Approve
                                                        </button>
                                                        <button type="submit" className="btn btn-primary login-btn" onClick={event => this.approve(lev.leaveId, 'REJECTED')}>
                                                            Disapprove
                                                        </button>
                                                    </div>
                                                </div>
                                                : null
                                        )
                                    })}

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Leaves