import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile.jsx' // Đảm bảo đúng đường dẫn file
import Home from './Pages/Home.jsx' // Đảm bảo đúng đường dẫn file
import Login from './Pages/Login.jsx'
import ProductFeature from './Components/ProductFeature.jsx'  
// import Hometemplate from './Templates/Hometemplate.jsx'
import HeaderHome from './Components/HeaderHome.jsx'
import MainLayout from './Templates/MainLayout.jsx'
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <Routes>
   
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProductFeature" element={<ProductFeature />} />
    </Route>

  
  </Routes>
</BrowserRouter>
)