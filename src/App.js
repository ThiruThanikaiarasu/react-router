import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css';
import HomeComponent from "./component/Routes/HomeComponent/HomeComponent";
import YoutubeSubscribeButtonComponent from "./component/Routes/YoutubeSubscribeButtonComponent/YoutubeSubscribeButtonComponent";
import CounterComponent from "./component/Routes/CounterComponent/CounterComponent";
import AboutUsComponent from "./component/Routes/AboutUsComponent/AboutUsComponent";
import ContactUsComponent from "./component/Routes/ContactUsComponent/ContactUsComponent";
import FormComponent from "./component/Routes/FormComponent.jsx/FormComponent";
import backgroundImage from "./component/img/gradient3.png"


function App() {
  return (
    <Router>
      <div className="App" style={{
        // width:"100%",
        height:'200 vh',
        backgroundImage:`url(${backgroundImage})`,
        backgroundRepeat:"no-repeat",
        // overflow:"hidden"
      }}>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/Counter' >Counter</Link>
          </li>
          <li>
            <Link to='/YouTube' >YouTube</Link>
          </li>
          <li>
            <Link to='/Form' >Form</Link>
          </li>
          <li>
            <Link to='/AboutUs' >About Us</Link>
          </li>
          <li>
            <Link to='/ContactUs' >Contact Us</Link>
          </li>
          
        </ul>
        <Routes className='container'>
          <Route exact path='/' element ={<HomeComponent/>}></Route>
          <Route exact path='/Counter' element ={<CounterComponent/>}></Route>
          <Route exact path='/YouTube' element ={<YoutubeSubscribeButtonComponent/>}></Route>
          <Route exact path='/AboutUs' element ={<AboutUsComponent/>} ></Route>
          <Route exact path='/ContactUs' element={<ContactUsComponent/>}></Route>
          <Route exact path='/Form' element={<FormComponent/>}></Route>
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
