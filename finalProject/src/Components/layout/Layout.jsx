import React from 'react'

function Layout({content}) {
  return (
    <div>
        <Headers/>
        {content}
        <Footer/>
    </div>
  )
}

export default Layout