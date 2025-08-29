import React from 'react'
import Title from '../components/Title'
import Header from './Header'
import Footer from './Footer'
import AboutUs from './AboutUs'
import Gallery from './Gallery'
import News from './News'
import ContactDetails from './ContactDetails'


const Layout = () => {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <Gallery />
      <News />
      <ContactDetails />
      <br />
      <Footer />
    </div>
  )
}

export default Layout
