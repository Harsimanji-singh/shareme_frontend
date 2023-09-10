import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { GoogleOAuthProvider} from '@react-oauth/google'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

//      <Router>
 <GoogleOAuthProvider clientId='525871340048-mi2p4nlepio8hnhhlqaloi3eaovhaf1s.apps.googleusercontent.com'> 

        <App/>   
     
 </GoogleOAuthProvider>  
    
//      </Router>
)