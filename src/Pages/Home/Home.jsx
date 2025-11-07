// import React from 'react'
import React, { useContext, useState } from 'react';
import './Home.css';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

import DisplayDetails from '../../components/DisplayDetails/DisplayDetails';
import FormComponent from '../../components/Form/FormComponent';
import UserContext from '../../Context/UserContext';
// import Navbar from '../Navbar/Navbar';


function Home() {
  const {editIndex}=useContext(UserContext)
  return (
    
    <>
      <div className="app-container">

        <div className="form-section">

          <div className="Heading">
            <i className="addIcon fa fa-plus-circle fa-xl" aria-hidden="true"></i>
            <h2 className="formHeading">{editIndex !== null ? 'Edit Items' : 'Add Items'}</h2>
          </div>

          <FormComponent/>
        </div>
        
        <div className="display-section">
          <div className="expenceHeading">

            <i className="addIcon fa-solid fa-receipt fa-2xl"></i>
            <h2 className="formHeading">Track Your Expense</h2>
          </div>
          

          <ToastContainer />

          <DisplayDetails/>

          
        </div>

      </div>
    </>
  )
}

export default Home
