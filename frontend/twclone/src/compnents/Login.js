import React, { useState } from 'react'

function Login() {
 const [isLogin, setIsLogin] = useState(true) ; 
 const loginSignupHandler = ()=>{
      setIsLogin(!isLogin) ;
   }
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='flex items-center justify-evenly w-[80%]'>
        <div>
          <img className='ml-5 mr-6' width={"500px"} src = 'https://img.freepik.com/premium-vector/twitter-global-social-media-networking-service-new-logo-twitter_944081-108.jpg?w=740' alt='twitter-logo'/>
        </div>
        <div className='mx-9'>
          <div className= 'my-5'>
            <h1 className='font-bold text-6xl'>What's Happening</h1>
          </div>
          <h1 className='mt-4 mb-2 text-2xl font-bold '>{isLogin ? "Login" : "Sign-up"}</h1>
          <form className='flex flex-col w-[55%]'>
            {
              !isLogin && (
                <>
                    <input className='outline-blue-500 border border-gray-800 px-3 my-1 py-2 rounded-full  font-semibold' type='text' placeholder='Name'/>
                    <input className='outline-blue-500 border border-gray-800 px-3 my-1 py-2 rounded-full font-semibold' type='text'  placeholder='Username'/>
                </>
              )
            }
            <input className='outline-blue-500 border border-gray-800 px-3 my-1 py-2 rounded-full font-semibold' type='text' placeholder='Email'/>
            <input className='outline-blue-500 border border-gray-800 px-3 my-1 py-2 rounded-full font-semibold' type='text'  placeholder='Password'/>
          <button className='bg-[#1D9BF0] border-none py-2 rounded-full my-4 text-lg text-white'>{isLogin ? "Login" : "Create Account"}</button>         
          <h1>{isLogin ? "Do not have an account ?" : "Already have an account?" } <span className='font-bold text-blue-600 cursor-pointer' onClick={loginSignupHandler}>{isLogin ? "Sign-up" : "Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login