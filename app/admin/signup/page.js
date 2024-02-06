"use client"
import React, { useState } from 'react';
import axios from 'axios';
import AuthLayout from '@/app/components/AuthLayout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [plan, setPlan] = useState('');
  const [email, setEmail] = useState('');
  const [is_superuser, setIs_SuperUser] = useState('');
  const [country_code, setCountry_code] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  console.log(username)
    //  console.log(plan)
    //  console.log(email)
    //  console.log(password)
    //  console.log(country_code)
    //  console.log(is_superuser)
  
     await axios.post(`${process.env.NEXT_PUBLIC_HOST}register/user/`,
     {
      email:email,
      country_code:country_code,
      phone_number:username,
      plan:plan,
      is_superuser:is_superuser,
      password:password
     }
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
    setError(error.message);
  });
  
  }

  return (
   <>
    <AuthLayout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full py-10 px-6 md:bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 ">Sign up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <input
              type="number"
              placeholder='Country Code'
              required
              className="border-blue-200 border-2 px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              value={country_code}
              onChange={(e) => setCountry_code(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="number"
              placeholder='Number'
              required
              className="border-blue-200 border-2 px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            
          </div>
          <div className="mb-4">
            <select
            className="border-blue-200 border-2 px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              id="dropdown"
              required
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value="">Select a plan</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder='Email'
              required
              className="border-blue-200 border-2 px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='password'
              required
              minLength="6"
              className="border-blue-200 border-2 px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='absolute right-4 top-[10px]'>
            {!showPassword && <button type='button' onClick={()=>setShowPassword(!showPassword)}><AiFillEyeInvisible/></button>}
            {showPassword && <button type='button' onClick={()=>setShowPassword(!showPassword)}><AiFillEye/></button> } 
          </div> 
          </div> 
          <div className="mb-4 relative px-4 py-2 flex justify-between">
            <label>Is Superuser?</label>
            <input type="radio" id="True" name="superuser" value="True"  onChange={(e) => setIs_SuperUser(e.target.value)} />
            <label htmlFor="True">True</label>
            <input type="radio" id="False" name="superuser" value="False"  onChange={(e) => setIs_SuperUser(e.target.value)}/>
            <label htmlFor="False">False</label>
          </div>  
          {error &&<p className='text-red-500 mb-4'>{error}</p>}    
        <button
            type="submit"
            className="bg-blue-950 hover:bg-blue-600 text-white font-medium tracking-wider py-2 px-4"
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