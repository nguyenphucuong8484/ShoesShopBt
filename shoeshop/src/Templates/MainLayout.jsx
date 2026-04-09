import React from 'react'
import HeaderHome from '../Components/HeaderHome'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <HeaderHome /> {/* Taskbar của bạn */}
      
      <main>
        <Outlet /> {/* CỰC KỲ QUAN TRỌNG: Nơi Home và Profile hiển thị */}
      </main>
    </div>
  )
}

export default MainLayout