// import { useState } from 'react'
import './App.css'
import Login from './components/login'
// import img from './assets/Group.png'
import SignUp from './components/signup'
import Page from './components/page'
// import bg from './assets/Background.png'
// import { BsFacebook } from 'react-icons/bs'
// import { FcGoogle } from 'react-icons/fc'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
// import Body from './components/body'
function App() {
  return (
    <div className="flex flex-col items-center">
      <SignUp />
      <Login />
      <Page />
    </div>
  )
}

export default App
