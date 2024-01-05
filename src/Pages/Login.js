import React, { useState } from 'react';
import './Login.css';
import socialDesktop from '../Imgaes/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        setLoading(true);
        const requestData = { email, password }
        axios.post(`${API_BASE_URL}/login`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    setLoading(false);
                    localStorage.setItem("token",result.data.result.token);
                    localStorage.setItem('user',JSON.stringify(result.data.result.user));
                    dispatch({type:'LOGIN_SUCCESS',payload:result.data.result.user});
                    setLoading(false);
                    navigate('/myprofile');
                    
                }
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

                                <h4 className="card-title text-center mt-3 fw-bold">Login</h4>

                                <form onSubmit={(e)=>login(e)}>
                                    <div class="mb-3">
                                        <input type="email"value={email} onChange={(ev) => setEmail(ev.target.value)} className="p-2 form-control input-bg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone,number, username or email' />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password"value={password} onChange={(ev) => setPassword(ev.target.value)} className="p-2 form-control input-bg" id="exampleInputPassword1" placeholder='Password' />
                                    </div>
                                    <div className='d-grid'>
                                        <button type='submit' className='btn btn-primary custom-btn custom-btn-blue'>Log In</button>

                                    </div>
                                    <div className='my-4'>
                                        <hr className='text-muted' />
                                        <h5 className='text-muted text-center'>OR</h5>
                                        <hr className='text-muted' />
                                    </div>
                                    <div className='mt-3 mb-5 d-grid'> <button type='submit' className='btn btn-primary custom-btn custom-btn-white'>
                                        <span>Don't have an account?</span>
                                        <Link to={'/signup'} className='ms-1 text-info fw-bold'>sign up</Link>
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
export default Login;
