"use client"
import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import { useRouter } from 'next/navigation';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
      callbackUrl: `${window.location.origin}/admin`,
    })

    if (result.ok === false) {
      setError(true);
      setLoading(false);
    } else {
      setError(false);
      setLoading(false);
      router.push('./admin');
    }

  }

  return (
    <>
      <AuthLayout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-md w-full py-10 px-6 md:bg-white md:shadow-md ">
            <h2 className="text-2xl font-bold mb-6 text-blue-500">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 relative">
                <input
                  type="text"
                  required
                  placeholder='Username'
                  className="border-blue-200 border-2  px-4 py-2 w-full tracking-wider focus:outline-none focus:border-blue-500"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  required
                  minLength="6"
                  className="border-blue-200 border-2  px-4 py-2 w-full tracking-wider  focus:outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='absolute right-4 top-[10px]'>
                  {!showPassword && <button type='button' onClick={() => setShowPassword(!showPassword)}><AiFillEyeInvisible /></button>}
                  {showPassword && <button type='button' onClick={() => setShowPassword(!showPassword)}><AiFillEye /></button>}
                </div>
              </div>
              {error && <p className='text-red-500 pb-3 '> wrong username or password</p>}
              <button
                type="submit"
                className="bg-blue-950 hover:bg-white hover:text-black text-white font-medium tracking-wider py-2  px-4 border border-blue-950"
              >
                Login
              </button>
            </form>
          </div>
          <div>
            {loading && <p>Loading....</p>}
          </div>
        </div>
      </AuthLayout>
    </>
  );
};
export default LoginPage;