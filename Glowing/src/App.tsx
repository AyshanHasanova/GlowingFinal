import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home 1' element = {<Home/>}/>
      <Route path='/home 2' element = {<Home/>}/>
      <Route path='/about us' element ={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
