import React from 'react'
import { Route, Routes } from 'react-router'
import Blog from '../pages/Blog'
import Home from '../pages/Home'
import Layout from '../Layout/Layout'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import FAG from '../pages/FAG'


function Router() {
  return (
    <>
      <Routes>
      <Route path='/' element ={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path='/blog' element = {<Blog/>}/>
      <Route path='/pricing' element = {<Pricing/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/fag' element = {<FAG/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default Router
