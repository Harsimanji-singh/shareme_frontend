import React from 'react'
import {Route} from 'react-router-dom'
import Home from './container/Home'
import { createBrowserRouter , createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Login from './components/Login'

const App=()=>{
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
              <Route path='/login' element = {<Login/>}/>
                <Route path = '*' element = {<Home/>}/>
            </>
        //    <Route path='/' element= {<Root/>}>
             
        //    {/* </Route> */}
               
            
            
        )   
    )
    return(
     <RouterProvider router = {router}/>
        // <Routes>
        //     <Route path='login' element={<Login/>}/>
        //     <Route paht= '/' element = {<Home/>}/>
        // </Routes>
    )
}
// const Root =()=>{
//     return(
//         <>
//         <div>
//             <Link to="/">Home</Link>
//             <Link to= "login">Login</Link>

//         </div>
//         <div>
//             <Outlet/>
//         </div>
//         </>
//     )
// }
export default App;