import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Faq from './pages/Faq'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
    <Toaster/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home 1' element = {<Home/>}/>
      <Route path='/home 2' element = {<Home/>}/>
      <Route path='/about us' element ={<About/>}/>
      <Route path='/about us1' element = {<About/>}/>
      <Route path='/contact'  element = {<Contact/>}/>
      <Route path = '/store'   element = {<Store/>} />
      <Route path='/faq' element = {<Faq/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
