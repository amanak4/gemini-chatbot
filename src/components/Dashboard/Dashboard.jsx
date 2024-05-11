// UserProfile.jsx

import React from 'react';
import './Dashboard.css';
import profile from '../../assests/img3.jpg';
import Buttonmod from '../Dashboard/Button';
// import { Sidebar } from 'lucide-react';
import Sidebar from './Sidebar';


const UserProfile = () => { 
  return (
    <div className='mainContainer'>
    <Sidebar />
    <div className="profile-container">
      <div className="left-box">
      <div className="profimage">
        <img src={profile}/>
      </div>
      <div className='titlename'>
        <h1 >My Profile </h1>
        <hr size="100px" width="100%" color="black"/>
        </div>
        <br/>
        <div className='details'>
          <p>Aman Kasaudhan</p>
          <div className='dummy'></div>
          <p>+91 9876543210</p>
        </div>
        <div className='details'>
          <p>Email: amankasaudhanmunna414@gmail.com</p>
        </div>
        <div className='details'>
          <p>Date of Birth: 69 December 2069</p>
        </div>
        <div className='details'>
          <p>Medical Diagnosis Status:</p>
          <Buttonmod/>
        </div>
        
        
      </div>
      <div className="right-box">
      <div className="right-top-box">
      <div className='titlename1'>
        <h1 >Disease Prediction and Evaluation </h1>
        <hr size="100px" width="100%" color="black"/>
        <div className='details1'>
          <p>Symptoms Experienced: </p>
        </div>
        <div className='details1'>
          <p>➣ Abdominal and Muscle Pain </p>
        </div>
        <div className='details1'>
          <p>➣ Chills and fever</p>
        </div>
        <div className='details1'>
          <p>➣ Vomiting and Nausea </p>
        </div>
        <div className='details1'>
          <p>According to the Medical Diagnosis, you have been diagnosed with : Malaria</p>
        </div>
        </div>
      </div>
      <div className="right-bottom-box">
      <div className='titlename2'>
        <h1 >Medical Treatment and Prevention </h1>
        <hr size="100px" width="100%" color="black"/>
        <div className='details1'>
          <p>For your current medical condition , follow the below instructions: </p>
        </div>
        <div className='details1'>
          <p>➣ Antiparasitic Medication </p>
        </div>
        <div className='details1'>
          <p>➣ Antibiotic Medication </p>
        </div>
        <div className='details1'>
          <p>➣ Artemisinin-based combination therapies(ACTs) </p>
        </div>
        <div className='details1'>
          <p>➣ Antimalarial Medication </p>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default UserProfile;
