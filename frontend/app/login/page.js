"use client"
import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn} from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();
 
  const handleSubmit = async(e) => {
    e.preventDefault();
     const newUsername=username.slice(9);
     const result = await signIn("credentials",{
          username:newUsername,
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
              placeholder='jupi.ter/Username'
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"
              value={username}
               onClick={(e) => setUsername('jupi.ter/')}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder='password'
              required
              minlength="8"
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider  focus:outline-none focus:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
      <p className='m-4 tracking-wider'>Don't have an account? <Link className=' text-blue-500 hover:text-blue-700 underline' href="/signup ">Sign up</Link></p>
    </div>
    </AuthLayout>
   </>
  );
};

export default LoginPage;

