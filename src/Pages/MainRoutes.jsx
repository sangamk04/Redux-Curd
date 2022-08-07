import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SingleMusicRecord from './SingleMusicRecord'
import EditMusicRecord from './EditMusicRecord'
import Login from './Login'
import Homepage from './Homepage'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Homepage/>} />
  <Route path="/music/:id" element={<SingleMusicRecord />} />
  <Route path="/music/:id/edit" element={<EditMusicRecord />} />
  <Route path="/login" element={<Login/>} />
  <Route path="*" element={<h3>Page Not Found</h3>} />
   </Routes>
  )
}

export default MainRoutes
