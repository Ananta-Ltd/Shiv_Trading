"use client"
import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signIn} from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
 
  const handleSubmit = async(e) => {
    e.preventDefault();
     const result = await signIn("credentials",{
          username:username,
          password:password,
          redirect:false,
          callbackUrl:`${window.location.origin}/admin` , 
     })
    
     if(result.ok===false){
      setError(true);
     }else{
      setError(false);
      router.push('./admin')
     }
    
}

  return (
   <>
    <AuthLayout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full py-10 px-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="text"
              required
              placeholder='Username'
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='password'
              required
              minlength="6"
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider  focus:outline-none focus:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
             <div className='absolute right-4 top-[10px]'>
                {!showPassword && <button type='button' onClick={()=>setShowPassword(!showPassword)}><AiFillEyeInvisible/></button>}
                {showPassword && <button type='button' onClick={()=>setShowPassword(!showPassword)}><AiFillEye/></button> } 
              </div> 
          </div>
          {error &&<p className='text-red-500 pb-3 '> wrong username or password</p>}
          <button
            type="submit"
            className="bg-black hover:bg-gray-600 text-white font-medium tracking-wider py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </AuthLayout>
   </>
  );
};

export default LoginPage;

