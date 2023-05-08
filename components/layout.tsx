import React from 'react'
import NavBar from './Navbar';

const MainLayout = ({children}) => {
  return (
    <>
      <NavBar />
        {children}
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout;