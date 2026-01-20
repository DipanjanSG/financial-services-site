import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import SuccessStory from './Pages/SuccessStory/SuccessStory';
import Footer from './Components/Footer/Footer';
import OurTeam from './Pages/OurTeam/OurTeam';
import ChatWidget from './Components/ChatWidget/ChatWidget';
import UniqueService from './Pages/UniqueService/UniqueService';
import Header from './Components/Header/Header';
import Services from './Pages/Services/Services';
import Article from './Pages/Articles/Articles';
import IndividualService from './Pages/IndividualService/IndividualService';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router basename ="/global-financial-services">
      <div>
      <Header/>  
      <Routes>
         <Route  path = "/" element ={<HomePage/>} />
         <Route  path = "/contact-us" element ={<ContactUs/>} />
         <Route  path = "/success-story" element ={<SuccessStory/>} />
         <Route  path = "/our-team" element ={<OurTeam/>} />
         <Route  path = "/unique-service" element ={<UniqueService/>} />
         <Route  path = "/about-us" element ={<AboutUs/>} />
         <Route  path = "/services" element ={<Services/>} />
         <Route  path = "/article" element ={<Article/>} />
         <Route  path = "/service" element ={<IndividualService/>} />


      </Routes>
      <ChatWidget/>
      <Footer/>  
      </div>
    </Router>
    
    </>
  )
}

export default App
