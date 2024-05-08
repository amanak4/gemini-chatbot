import './App.css';
import {BrowserRouter as Router, Routes, Route, useNavigate, Form} from 'react-router-dom';
import Navbar from './components/Layouts/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Layouts/Footer';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';
import Diagnosis from "./components/Diagnosis/Diagnosis"
import HeartDiseaseForm from './components/Form/Heart_disease.jsx';
import DiabetesForm from './components/Form/Diabetes.jsx';
import DiabeticRetinopathyForm from './components/Form/Image-Part/Diabeticretinopathy.jsx';
function App() {

  const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);
// const navigateTo=useNavigate();
  const getUser = async () => {
    try {
      const response = await axios.get("",{withCredentials:true});
      console.log("app response",response);
      const userData = response.data.user;
      console.log("userdata",userData);
      if (userData) {
        setUser(userData._json);
        setIsAuthorized(true);
        toast.success(response.data.message);
// navigateTo('/');
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  useEffect(() => {
    getUser();
  }, []);

  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/diagnosis' element={<Diagnosis />} />
      <Route path='/diabetes' element={<DiabetesForm />} />
      <Route path='/heart-disease' element={<HeartDiseaseForm />} />
      <Route path='/diabetic-retinopathy' element={<DiabeticRetinopathyForm />} />
   <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    <Toaster />
   </Router>
   </>
  );
}

export default App;
