import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header  from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Layout from './components/layout'
import About from './components/about/about'
import Contact from './components/contact/contact'
import User from './components/user/user' 
import Github, { githubInfoLoader } from './components/github/Github' 
import CourseRecommendation from './components/courcerecommend/Course'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import App from './App'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [
//       {
//         path:"",
//         element:<Home/>,
//       },
      
//       {
//         path:"about",
//         element:<About/>,
//       },
      
//       {
//         path:"contact",
//         element:<Contact/>,
//       },
      
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element = {<Layout /> }>
      <Route path='' element={<Home />}  />  
      <Route path='about' element={<About />}  />  
      <Route path='contact' element={<Contact />}  />  
      <Route path='user/:userid' element={<User />}  />  
      <Route path='todo' element={<App />}  />  
      <Route path='courcerecommend' element={<CourseRecommendation />}  />  
      <Route 
      loader = { githubInfoLoader}
      path='github'
       element={<Github />} 
        />  
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>

  </StrictMode>,
)

