import { useState } from 'react'

import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import SideBar from './components/layouts/SideBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      this is my react app
      <Footer></Footer>


    </>
  )
}

export default App
