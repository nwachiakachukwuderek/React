import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer.jsx/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='home' element={<Home />}/>
        <Route path='about' element={<About />}/> 
        <Route path='contact' element={<Contact />}/> 
        <Route path='user/' element={<User/>}>
         <Route path=':userid' element={<User />}/> 
        </Route>
        <Route
        loader={githubInfoLoader}
        path='github' 
        element={<Github />}/> 
        <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
 