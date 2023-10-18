import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
function Layout({content}) {
  return (
    <div>
        <Header/>
        {content}
        <Footer/>
    </div>
  )
}

export default Layout