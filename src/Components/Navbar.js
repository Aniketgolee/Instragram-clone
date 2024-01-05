import React from 'react';
import '../Components/Navbar.css'
import logo from '../Imgaes/OIP.jpeg'
import { NavLink, useNavigate } from 'react-router-dom';
import '../Components/Card.css'
import { useDispatch, useSelector } from 'react-redux';
function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state=>state.userReducer);
        const logout =()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            dispatch({type:"LOGIN_ERROR"});
            navigate("/login");
        }
    return (
        <div>
            <nav class=" navbar bg-light shadow">
                <div class="container-fluid">
                    <a class="navbar-brand ms-5">
                        <img alt="logo" src={logo} style={{ height: "45px" }} />
                    </a>
                    <form class="d-flex me-5 navBox" role='search'>
                        <div className='d-flex'>
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" aria-label="Search" />
                        <a className='nav-link text-dark fs-5 ' href='#'><i class="fa-solid fa-house iconadjust"  ></i></a>
                        <a className='nav-link text-dark fs-5 ' href='#'><i class="fa-solid fa-heart"></i></a>
                        </div>
                        
                        <div className='dropdown '>
                            <a className='btn' href='#' role='button' data-bs-toggle="dropdown">
                                <img src='https://th.bing.com/th/id/OIP.7y34p7gUXDojc6MZz5AwfwHaHJ?pid=ImgDet&rs=1' className='instacard-profile-image'  style={{marginRight:'90px'}}/>
                            </a>

                            <ul className='dropdown-menu'>
                                <li>
                                    
                                        <NavLink className='dropdown-item mt-0 ' to='/myprofile'>My profile</NavLink>
                                   
                                </li>
                                <li>
                                    <a className='dropdown-item' href='#' onClick={()=>logout()}>
                                        Logout
                                    </a>
                                </li>
                            </ul>

                        </div>


                    </form>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
