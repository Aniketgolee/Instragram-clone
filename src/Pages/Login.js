import React from 'react';
import './Login.css';
import socialDesktop from '../Imgaes/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='Container login-container'>
            <div className='row'>
                <div className='col-md-7  d-flex justify-content-center'>
                    <img src={socialDesktop} className='figure-img img-fluid rounded float-md- mb-3 ms-md3' alt='img'/>
                </div>
                <div className='col-md-4' >
                    <div className="card">
                        <div className='card shadow'>
                            <div className="card-body">

                                <h4 className="card-title text-center mt-3 fw-bold">Login</h4>

                                <form>
                                    <div class="mb-3">
                                        <input type="email" className="p-2 form-control input-bg" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder='Phone,number, username or email'/>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" className="p-2 form-control input-bg" id="exampleInputPassword1" placeholder='Password'/>
                                    </div>
                                    <div className='d-grid'>
                                        <button type='submit' className='btn btn-primary custom-btn custom-btn-blue'>Log In</button>

                                    </div>
                                    <div className='my-4'>
                                        <hr className='text-muted'/>
                                        <h5 className='text-muted text-center'>OR</h5>
                                        <hr className='text-muted'/>
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
