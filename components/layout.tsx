import React, { ReactNode } from 'react'
import NavBar from './Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <NavBar />
        {children}
      {/* <Footer /> */}
    </>
  )
}

export default MainLayout;