import React from 'react'
import Login from '../components/Login'
import Footer from '../components/Footer'
import Order from '../components/NewOrder'



const Home = () => {
  return (
    <div>
      <Login/>
      <Order/>
      <Footer/>
    </div>
  )
}

export default Home