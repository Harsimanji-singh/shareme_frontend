import React from 'react'
import ShareVideo from '../assets/share.mp4'
import jwt_decode from 'jwt-decode'
import { client } from '../client'
import { GoogleLogin } from '@react-oauth/google'
import logo from '../assets/logowhite.png'
import { useNavigate } from 'react-router-dom'
 const Login = () =>
  
 {
    const navigate = useNavigate();
    const responseGoogle=(respone)=>{
    
      var decodedHeader = jwt_decode(respone.credential);
        localStorage.setItem('user',JSON.stringify(decodedHeader))

        const {name,sub, picture}  = decodedHeader
    
        console.log(decodedHeader)
        let Doc ={
            _id:sub,
            _type:'user',
            userName:name,
            image:picture,
        }
        client.createIfNotExists(Doc).then(()=>{
            navigate('/',{replace:true})
        })
    }
  return (
    <div className='flex justify-start items-center flex-col h-screen '>
      
      <div className="relative w-full h-full">
        <video
        src={ShareVideo}
        type = "video/mp4"
        loop
        controls= {false}
        muted
        autoPlay
        className="w-full h-full object-cover"

        /> 
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className="p-5">
            <img src = {logo} width ='130px' alt = "logo"/>
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              buttonText = 'login'
             
              className='bg-mainColor flex justify-center itmes-center p-3 rounded-1g cursor-pointer outline-none'
              onSuccess = {responseGoogle}
              onFailure = {responseGoogle}
              cookiePolicy  = "single_host_origin"
            />
          </div>
        </div>
        
   

      </div>
    </div>
  )
}

export default Login