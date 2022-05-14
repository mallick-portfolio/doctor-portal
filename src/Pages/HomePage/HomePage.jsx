import React from 'react'
import Footer from '../Shared/Footer.jsx'
import Appoinment from './Appoinment.jsx'
import Banner from './Banner.jsx'
import ContactLocation from './ContactLocation'
import ContactUs from './ContactUs.jsx'
import DentalCare from './DentalCare.jsx'
import Services from './Services.jsx'
import Testimonial from './Testimonial.jsx'
const HomePage = () => {
  return (
    <div>
      <Banner />
      <ContactLocation />
      <Services />
      <DentalCare />
      <Appoinment />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage
