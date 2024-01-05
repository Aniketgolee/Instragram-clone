import React from 'react';
import './SignUp.css';
import socialDesktop from '../Imgaes/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import Swal from 'sweetalert2';
const SignUP = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const signup = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { fullName: fullName, email, password }
        axios.post(`${API_BASE_URL}/signup`, requestData)
            .then((result) => {
                debugger;
                if (result.status === 201) {
                    setLoading(false)
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                }
                setFullName('');
                setEmail('');
                setPassword('')
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occurred please try again later!'
                })
            })
        setLoading(true);

    }
    return (
        <div className='Container login-container'>
            <div className='row'>

            </div>
            <div className='row'>

                <div className='col-md-7  d-flex justify-content-center'>
                    <img src={socialDesktop} className='figure-img img-fluid rounded float-md- mb-3 ms-md3' alt='img' />
                </div>


                <div className='col-md-4' >

                    <div className="card">
                        <div className='card shadow'>
                            <div className="card-body">
                                {loading ? <div className='col-md-12 mt-2 text-center'>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div> : ''}
                                <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>

                                <form onSubmit={(e) => signup(e)}>
                                    <div className="mb-3">
                                        <input type="text" className="p-2 form-control input-bg" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder='Phone' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)} className="p-2 form-control input-bg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />

                                    </div>
                                    <div className="mb-3">
                                        <input type="text" value={fullName} onChange={(ev) => setFullName(ev.target.value)} className="p-2 form-control input-bg" id="exampleInputPassword1" placeholder='Fullname' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className="p-2 form-control input-bg" id="exampleInputPassword1" placeholder='Password' />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Remember Password</label>
                                    </div>
                                    <div className='d-grid'>
                                        <button type='submit' className='btn btn-primary custom-btn custom-btn-blue'>Sign Up</button>

                                    </div>
                                    <div className='my-4'>
                                        <hr className='text-muted' />
                                        <h5 className='text-muted text-center'>OR</h5>
                                        <hr className='text-muted' />
                                    </div>
                                    <div className='mt-3 mb-5 d-grid'> <button type='submit' className='btn btn-primary custom-btn custom-btn-white'>
                                        <span>Already have an account?</span>
                                        <Link to="/login" className='ms-1 text-info fw-bold'>Log In</Link>
                                    </button>
                                    </div>


                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUP;
