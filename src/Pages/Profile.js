import React, { useState } from 'react';
import '../Pages/Profile.css'
import logo from '../Imgaes/nature.jpg';
import Button from 'react-bootstrap/Button';
import { API_BASE_URL } from '../config';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Swal from 'sweetalert2';
import { useNavigate} from 'react-router-dom';


const Profile = () => {
    const [image, setImage] = useState({ preview: '', data: '' })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const [showPost, setShowPost] = useState(false);
    const [caption, setCaption] = useState("");
    const [location, setLocation] = useState("");
    const handlePostClose = () => setShowPost(false);
    const handlePostShow = () => setShowPost(true);
    const CONFIG_OBJ = {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": 'Bearer' + localStorage.getItem("token")
        }
    }
    const handleFileSelect = (event) => {
        const img = {
            preview: URL.createObjectURL(event.target.files[0]),
            data: event.target.files[0]
        }
        setImage(img);
    }
    const handleImgUpload = async () => {
        let formData = new FormData();
        formData.append('file', image.data);

        const response = axios.post(`${API_BASE_URL}/uploadFile`, formData)
        return response;
    }
    const addPost = async () => {
        if (image.preview === '') {
            Swal.fire({
                icon: 'error',
                title: 'Post image is mandatory!'
            })
        } else if (caption === '') {
            Swal.fire({
                icon: 'error',
                title: 'Post caption is mandatory !'
            })
        }
        else if (location === '') {
            Swal.fire({
                icon: 'error',
                title: 'Location is mandatory !'
            })
        } else {
            const imgRes = await handleImgUpload();
            //add validation rule for caption and location
            const request = { description: caption, location: location, image: `${API_BASE_URL}/${imgRes.data.fileName}` }
            //write api call to create post
            const postResponse = await axios.post(`${API_BASE_URL}/createpost`,request,CONFIG_OBJ);
            if(postResponse.status ===201){
                navigate("/posts")
            }else{
                Swal.fire({
                    icon:'error',
                    title:'Some error occurred while creating post'
                })
            }
        }
    }

    return (
        <div className='container shadow mt-3 p-4 '>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column '>
                    <img src={logo} className='p-2 img-fluid profile-image imageBox' alt='post pic' />
                    <p className='ms-3 fs-5 fw-bold'>Aniket Gole</p>
                    <p className='ms-3 fs-5 '>Aniket Gole</p>
                    <p className='ms-3 fs-5 '>Web Developer @aniket | @aniketgole</p>
                    <p className='ms-3 fs-5 '>My portfolio on <a href='#'>www.porfolio.com/aniket</a> </p>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-between'>
                    <div className='d-flex justify-content-equal'>
                        <div className='count-section  text-center fw-bold postaddpad'>
                            <h4>10</h4>
                            <p>Posts</p>
                        </div>
                        <div className='count-section text-center fw-bold folloaddpad'>
                            <h4>300</h4>
                            <p>Followers</p>
                        </div>
                        <div className='text-center fw-bold followeradd'>
                            <h4>200</h4>
                            <p>Following</p>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <button className='custom-btn custom-btn-white me-md-3'>
                            <span className='fs-6 p-3'> Edit Profile</span>
                        </button>
                        <button className='custom-btn custom-btn-white' onClick={handlePostShow}>
                            <span className='fs-6 p-3'> Upload Post</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <div className='col-12'>
                    <hr />
                </div>
            </div>
            <div className='row paddBox'>
                <div className='col-md-4 col-sm-12 '>
                    <div class="card" onClick={handleShow}>
                        <img src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' class="card-img-top" alt="Krishna-image" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 '>
                    <div class="card">
                        <img src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 '>
                    <div class="card">
                        <img src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className='row mb-2'>
                <div className='col-md-4 col-sm-12 img-add'>
                    <div class="card">
                        <img src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className="card-img-top" alt="Krishna-image" />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 img-add'>
                    <div class="card">
                        <img src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className='col-md-4 col-sm-12 img-add'>
                    <div class="card">
                        <img src='https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <Carousel>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://images.unsplash.com/photo-1465990138262-b7c355d1ef90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://images.unsplash.com/photo-1668680771112-aec06599435b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                            alt="Second slide"
                                        />


                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                            alt="Third slide"
                                        />


                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='col-sm-4 boxOne'>
                                <div id='instacard' className='instacard'>
                                    <div id='header' className='instacard-header'>
                                        <div>
                                            <img src='https://th.bing.com/th/id/OIP.7y34p7gUXDojc6MZz5AwfwHaHJ?pid=ImgDet&rs=1' className='instacard-profile-image' />
                                            <span className='instacard-profile-name'>mixandgo</span>
                                        </div>
                                        <div className='dropdown'>
                                            <a className='btn' href='#' role='button' data-bs-toggle="dropdown">
                                                <span className='instacard-actions' style={{ fontSize: '30px' }}>...</span>
                                            </a>
                                            <ul className='dropdown-menu'>
                                                <li><a className='dropdown-item' href='#'><i className='fa-regular fa-pen-to-square px-2'></i>
                                                    Edit Post</a></li>
                                                <li><a className='dropdown-item' href='#'><i className='fa-regular fa-trash px-2'></i>
                                                    Delete Post</a></li>
                                            </ul>

                                        </div>



                                    </div>
                                    <div id='image'>

                                    </div>
                                    <div id='actions' className='actions'>
                                        <span className='instacard-like-icon'><i className="fa-regular fa-heart"></i></span>
                                        <span className='instacard-comment-icon'><i className="fa-regular fa-comment"></i></span>
                                        <span className='instacard-share-icon'><i className="fa-sharp fa-solid fa-share"></i></span>

                                        <div className='clearfix'></div>
                                    </div>
                                    <div id='likes' className='instacard-likes'>
                                        349 likes
                                    </div>
                                    <div id='comments' className='instacard-comments' >
                                        <div className='instacard-comment' style={{ paddingTop: '10px' }}>
                                            <span className='instacard-commenti-like-icon'><i className="fa-regular fa-heart"></i></span>
                                            <span className='instacard-comment-profile'>john_doe - </span>
                                            <span className='instacard-comment-body'>hey, nice photo</span>
                                        </div>
                                        <div className='instacard-comment' style={{ paddingTop: '10px' }}>
                                            <span className='instacard-commenti-like-icon'><i className="fa-regular fa-heart"></i></span>
                                            <span className='instacard-comment-profile'>Superman- </span>
                                            <span className='instacard-comment-body'>hey look like princes</span>
                                        </div>
                                        <div className='instacard-comment' style={{ paddingTop: '10px' }}>
                                            <span className='instacard-commenti-like-icon'><i className="fa-regular fa-heart"></i></span>
                                            <span className='instacard-comment-profile'>hulk- </span>
                                            <span className='instacard-comment-body'>rocking,2023</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
            <Modal show={showPost} onHide={handlePostClose} size='lg' centered>
                <Modal.Header closeButton>
                    <span className='fw-bold fs-5'>Upload Post</span>

                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12'>
                            <div className='upload-box'>
                                <div className='dropZoneContainer'>
                                    <input name='file' type='file' id="drop_zone" className='FileUpload' accept='.jpg,.png,.gif' onChange={handleFileSelect} />
                                    <div className='dropZoneOverlay'>
                                        {image.preview && <img src={image.preview} width='150' height='150' />}
                                        <i className='fa-solid fa-cloud-arrow-up fs-1'></i><br />Upload Photo From Computer</div>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-between'>
                            <div className='row'>
                                <div className='col-sm-12 mb-3'>
                                    <div className='form-floating'>
                                        <textarea onChange={(ev) => setCaption(ev.target.value)} className='form-control' placeholder='Add Caption' id='floatingTextarea'></textarea>
                                        <label for="floatingTextarea">Add Caption</label>
                                    </div>

                                </div>
                                <div className='col-sm-12'>
                                    <div className='form-floating mb-3'>
                                        <input type='text' onChange={(ev) => setLocation(ev.target.value)} className='form-control' id='floatingInput' placeholder='Add location' />
                                        <label for="floatingInput"><i className='fa-solid fa-location-pin pe-2'></i> Add Location</label>

                                    </div>

                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-sm-12'>

                                    <button onClick={()=>addPost()} className='custom-btn custom-btn-pink float-end'>
                                        <span className='fs-6 fw-700'> Post</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </Modal.Body>

            </Modal>
        </div>

    )
}

export default Profile;