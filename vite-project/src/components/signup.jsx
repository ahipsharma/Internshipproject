import { useState } from 'react'
import img from '../assets/Group.png'
import bg from '../assets/Background.png'
import { BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
function SignUp() {
//   const [count, setCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <div className="border-2 rounded-md">
        <div className="text-[#008A45] bg-[#EFFFF4] p-2">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-5">
            <h1 className="font-bold p-2 text-left">Create Account</h1>
            <div className="flex flex-row">
              <input type="text" placeholder="First Name" className="border-2 rounded-tl-sm p-2 w-1/2 outline-none bg-[#F7F8FA]" />
              <input type="text" placeholder="Last Name" className="border-y-2 border-r-2 rounded-tr-sm p-2 w-1/2 outline-none bg-[#F7F8FA]" />
            </div>
            <input type="text" placeholder="Email" className="border-x-2 p-2 w-full outline-none bg-[#F7F8FA]" />
            <div className="flex flex-row items-center bg-[#F7F8FA] border-2 p-1 justify-between">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-[#F7F8FA] outline-none"
              />
              <AiOutlineEye
                icon={showPassword ? AiOutlineEye : AiOutlineEyeInvisible}
                onClick={togglePasswordVisibility}
                className="password-icon"
              />
            </div>
            <input type="text" placeholder="Confirm Password" className="border-x-2 border-b-2 rounded-b-sm p-1 w-full outline-none bg-[#F7F8FA]" />
            <br></br>
            <div className="flex flex-col justify-center items-center">
              <button className=" flex border rounded-full p-3 bg-blue-600 text-white text-bold w-full content-center justify-center">Create Account</button>
            </div>
            <br></br>
            <button className="flex items-center justify-center border-2 rounded-sm">
                <BsFacebook />
                <span className="p-1">Sign up with Facebook</span>
            </button>
            <br></br>
            <button className="flex items-center justify-center border-2 rounded-sm">
                <FcGoogle />
                <span className="p-1">Sign up with Google</span>
            </button>
          </div>
          <div className="p-7">
            <span>Already have an account? </span><span><a className="cursor-pointer">Sign In</a></span>
            <img src={img} alt="img" className="w-full" />
            <span className="pr-4 text-xs">By signing up, you agree to our Terms & conditions, Privacy policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
