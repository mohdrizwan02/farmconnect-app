import About from '@/components/Aboutbanner'
import Carousel from '@/components/Carauselbanner'
import Contact from '@/components/Contactbanner'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Services from '@/components/Servicesbanner'
import Header from '@/components/Header'
import LoginSignupheader from '@/components/miniHeader'
import React from 'react'

const page = () => {
  return (
    <>
    <LoginSignupheader/>
    <Header/>
    <Carousel/>
    <Services/>
    <About/>
    <Contact/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default page
