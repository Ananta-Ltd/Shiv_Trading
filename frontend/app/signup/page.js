"use client"
import React, { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import axios from 'axios';
import {useFormik} from "formik";
import {userSchema} from "../Validations/UserValidation";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const SignupPage = () => {
  
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (values, actions) => {
  
     const {username, name, email, password} = values
     //username=newUsername.slice(9);
     await axios.post(`http://127.0.0.1:8000/user/?user_name=${username}&name=${name}&email=${email}&password=${password}`)

    .then(response => {
      console.log(response.data);
      if (response.status >= 200 && response.status < 300) {
        // If signup was successful, redirect to login page
        router.push('/login?redirectedFrom=signup');
      }
    })
    .catch(err=> {
      setError(err.response.data.detail);
    });
    actions.resetForm();
  
  }
 
  const {values ,errors , touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: userSchema,
    onSubmit,
  })

  return (
   <>
   <AuthLayout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full py-10 px-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6 ">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name='username'
              placeholder='jupi.ter/Username'
              className={ errors.username && touched.username ? "border-red-500 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-red-500": "border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"}
              value={values.username}
              // onClick={(e) => setNewUsername('jupi.ter/')}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.username && touched.username && <p className='text-red-500 text-sm'>{errors.username}</p>}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder='Name'
              name='name'
              className={ errors.name && touched.name ? "border-red-500 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-red-500": "border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            { errors.name && touched.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder='Email'
              name='email'
              className={ errors.email && touched.email ? "border-red-500 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-red-500": "border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
              { errors.email && touched.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder='password'
              name='password'
              className={ errors.password && touched.password ? "border-red-500 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-red-500": "border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
              { errors.password && touched.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
            {error &&<p className='text-red-500 '>{error}</p>}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder='Confirm Password'
              name='confirmPassword'
              className={ errors.confirmPassword && touched.confirmPassword ? "border-red-500 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-red-500": "border-gray-200 border-2 rounded-md px-4 py-2 w-full tracking-wider focus:outline-none focus:border-gray-500"}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
              { errors.confirmPassword && touched.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
          </div>
        <button
            type="submit"
            disabled={isSubmitting}
            className={isSubmitting?  "bg-black hover:bg-gray-600 text-white font-medium tracking-wider py-2 px-4 rounded-md opacity-50" : "bg-black hover:bg-gray-600 text-white font-medium tracking-wider py-2 px-4 rounded-md"}
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
