import React from 'react';
import './SignUp.css';
import socialDesktop from '../Imgaes/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import {Link} from 'react-router-dom';
const SignUP = () => {
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

                                <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>

                                <form>
                                <div class="mb-3">
                                        <input type="text" className="p-2 form-control input-bg" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder='Phone' />
                                    </div>
                                    <div class="mb-3">
                                        <input type="email" className="p-2 form-control input-bg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" className="p-2 form-control input-bg" id="exampleInputPassword1" placeholder='Full NAme' />
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" className="p-2 form-control input-bg" id="exampleInputPassword1" placeholder='Password' />
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                            <label class="form-check-label" for="exampleCheck1">Remember Password</label>
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
