import React from 'react'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import About from '@/components/about/About'
import AboutInstructor from '@/components/about_the_instructor/AboutInstructor'

const page = () => {
  return (
    <>
    <Header/>
    <About/>
    <AboutInstructor/>
    <Footer/>

    </>
  )
}

export default page
