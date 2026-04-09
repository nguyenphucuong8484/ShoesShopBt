import React from 'react'
import HeaderHome from '../Components/HeaderHome'
import { Outlet } from 'react-router-dom'
import ResponsiveComponent from '../pages/HOC/ResponsiveComponent'
import Footer from '../components/Footer'
import BottomTab from '../Components/BottomTab'

const HomeTemplate = () => {
  return (
    <div className='home-page'>
        <HeaderHome />
        <div className='content'>
            <Outlet />
        </div>


        <ResponsiveComponent Component={<Footer />} MobileComponent={<BottomTab />}></ResponsiveComponent>
        
    </div>
  )
}

export default HomeTemplate