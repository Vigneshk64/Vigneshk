import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import '../css/Login.css'

export default function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '' // Changed 'Password' to lowercase
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate=useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('Form Data:', formData);

  try {
    const res = await axios.post('http://localhost:7002/api/user', formData);
    console.log("Response:", res.data);

    if (res.data.success) {
      localStorage.setItem('usertoken', res.data.authtoken);
      alert("Login Successfully");
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  } catch (err) {
    console.error("Login Error:", err);
    alert("An error occurred while logging in. Check console.");
  }
};


  return (
    <div>
<MDBContainer fluid className="my-5 d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Login</h2>


              {/* <MDBInput wrapperClass='mb-4' label='Name' name='name' id='form3' type='name' onChange={handleChange}/> */}

              <MDBInput wrapperClass='mb-4' label='Email' name='email' id='form3' type='email' onChange={handleChange}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' name='password' type='password' onChange={handleChange}/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

<MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>Login</MDBBtn> {/* Updated button label */}


              <div className="text-center">
<Link to={'/sign'}>
                <p>Create Account</p>
</Link>
                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol col='6'>
          <img src="https://i.pinimg.com/736x/b7/e7/24/b7e724e2c30e2154b62269ae49461011.jpg" class="w-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  )
}
