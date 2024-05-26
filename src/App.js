import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate, Form, useLocation} from 'react-router-dom';
// import Navbar from './components/Layouts/Navbar';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import ForgotPassword from './components/Auth/ForgotPassword.jsx';
// import ChangePassword from './components/Auth/ChangePassword.jsx';
// import Footer from './components/Layouts/Footer';
// import Home from './components/Home/Home';
// import NotFound from './components/NotFound/NotFound';
// import { useContext, useEffect, useState } from 'react';
// import { Context } from '.';
// import toast,{Toaster} from 'react-hot-toast';
// import axios from 'axios';
// import Diagnosis from "./components/Diagnosis/Diagnosis"
// import HeartDiseaseForm from './components/Form/Heart_disease.jsx';
// import DiabetesForm from './components/Form/Diabetes.jsx';
// import DiabeticRetinopathyForm from './components/Form/Image-Part/Diabeticretinopathy.jsx';
// import CataractForm from './components/Form/Image-Part/Cataract.jsx';
// import SkinDiseaseForm from './components/Form/Image-Part/Skin_Disease.jsx';
// import Ct_scan_form from './components/Form/Image-Part/ct_scan.jsx';
// import Cardio_disease from '../src/components/Form/Cardio_disease.jsx';
// import Liver_Disease from '../src/components/Form/Liver_Disease.jsx'
// import Blood_Test from '../src/components/Form/BloodTest.jsx';
// import Kidney_Stone from '../src/components/Form/Kidney_Stone.jsx';
import Medibuddy from './components/MediBuddy/Main/Medibuddy.jsx';
// import { BASE_URL } from './Base_url.js';
// import BloodTestResults from './components/Results/BloodTestResults.jsx';
// import HeartDiseaseResults from './components/Results/HeartDiseaseResult.jsx';
// import Cardio_disease_Results from './components/Results/CardioDiseaseResults.jsx';
// import DiabetesResults from './components/Results/DiabetesResults.jsx';
// import KidneyStoneResults from './components/Results/KidneyStoneResults.jsx';
// import UserProfile from './components/Dashboard/Dashboard.jsx';
// import LiverDiseaseResult from './components/Results/LiverDiseaseResult.jsx';
// import CataractResult from './components/Results/Img-result/CataractResult.jsx';
// import CTScanResult from './components/Results/Img-result/CT_scanResult.jsx';
// import DiabeticRetinopathyResult from './components/Results/Img-result/DiabeticretinopathyResult.jsx';
// import SkinDiseaseResult from './components/Results/Img-result/SkinDiseaseResult.jsx';
// import RecommendationPage from './components/RecommendationPage/RecommendPage.jsx';
// import { AnimatePresence } from 'framer-motion';
// import AnimatePage from './components/AnimatePage/animatePage.jsx';
import { Context } from '.';
import toast,{Toaster} from 'react-hot-toast';
import { useContext, useState } from 'react';

function App() {

  const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);
const [showAnimate,setShowAnimate]=useState(false);
  const location = useLocation();
  // const location = window.location;
  // const getUser = async () => {
  //   try {
  //     if(location.pathname==='/medibuddy'){
  //       return;
  //     }
  //     const response = await axios.get(`${BASE_URL}/getuser`,{withCredentials:true});
  //     console.log("app response",response);
  //     setUser(response.data.user);
  //     setIsAuthorized(true);
  //     toast.success(response.data.message);

  //   } catch (error) {
  //     toast.success(error.response.data.message);
  //     setIsAuthorized(false);
  //     console.error('Error fetching user data:', error);
  //   }
  // };
 
  // useEffect(() => {
  //   getUser();
  // }, [isAuthorized]);
  
  console.log("auth->",isAuthorized);
  console.log("user->",user);
  return (
   <>
   <>
    {/* <Navbar /> */}
    {/* <AnimatePage showAnimate={showAnimate} setShowAnimate={setShowAnimate} /> */}
    {/* <AnimatePresence mode='wait' onExitComplete={() => setShowAnimate(false)}> */}
    <Routes location={location} key={location.key}>
      <Route path='/medibuddy' element={<Medibuddy />} />
    </Routes>
    {/* </AnimatePresence> */}
    {/* <Footer /> */}
    <Toaster />
   </>
   </>
  );
}

export default App;
