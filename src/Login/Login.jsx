import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from "firebase/auth";



const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Error logging in. Please check your credentials.');
    }
  };


  return (
    
    <section className="bg-black/70 min-h-screen flex items-center justify-center">
      
      <div className="bg-white px-4 py-10 sm:px-6 sm:py-16 rounded-md xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center">
         
        </div>
        <h2 className="text-2xl font-bold leading-tight text-black text-center mb-4">
          Sign in to your account           
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-black transition-all duration-200 hover:underline"
          >
            Create a free account
          </a>
        </p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          <Form className="space-y-5">
            <div>
              <label className="text-base font-medium text-gray-900">Email address</label>
              <div className="mt-2">
                <Field
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">Password</label>
                <a href="#" className="text-sm font-semibold text-black hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="mt-2">
                <Field
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
            </div>
            <div>
            <button
                 type="submit"
                 className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50"
               >
                 Create Account
               </button>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer/>
    </section>
  );
};

export default Login;
