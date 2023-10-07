"use client"
import React, { useState } from 'react';
import axios from 'axios';
import AuthLayout from '@/app/components/AuthLayout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log(username)
     console.log(name)
     console.log(email)
     console.log(password)
     await axios.post(`http://127.0.0.1:8000/users/?user_name=${username}&name=${name}&email=${email}&password=${password}`
)
  .then(response => {
    console.log(response.data);
    if (response.status >= 200 && response.status < 300) {
      // If signup was successful, redirect to login page
      router.push('/login');
    }
  })
  .catch(error => {
    console.error(error);
    setError(true);
  });
  
  }

  return (
   <>
    <AuthLayout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full py-10 px-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 ">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="number"
              placeholder='Number'
              required
              max={10}
              min={10}
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"
              value={username}
              // onClick={(e) => setUsername('jupi.ter/')}
              onChange={(e) => setUsername(e.target.value)}
            />
            {error &&<p className='text-red-500 '> username already exist</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder='Name'
              required
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder='Email'
              required
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder='password'
              required
              minlength="8"
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="mb-4">
            <input
              type="password"
              placeholder='Confirm Password'
              required
              minlength="8"
              className="border-gray-200 border-2 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
        <button
            type="submit"
            className="bg-black hover:bg-gray-600 text-white font-medium tracking-wider py-2 px-4 rounded-md"
          >
            Sign up
          </button>
        </form>
        
      </div>
      <p className='m-4 tracking-wider'>Already signup? Go to <Link className=' text-blue-500 hover:text-blue-700 underline' href="/login ">Login</Link> page</p>
    </div>
    </AuthLayout>
   </>
  );
};

export default SignupPage;