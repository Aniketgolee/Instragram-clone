
import './App.css';
import Navbar from './Components/Navbar';
import PostOverview from './Components/PostOverview';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import SignUP from './Pages/SignUp';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className='app-bg'>
      
      <Router>
        <Navbar/>
        <Routes>
          
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<SignUP/>}></Route>
          <Route exact path="/Post" element={<PostOverview/>}></Route>
          <Route exact path="/myprofile" element={<Profile/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
