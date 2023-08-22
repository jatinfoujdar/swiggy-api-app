import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);

const Signup = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const handleSignup = async (values) => {
    const { name, email, password } = values;

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

      // Update the user's display name
      const user = userCredential.user;
      if (user) {
        await user.updateProfile({
          displayName: name,
        });
      }

      toast.success('Sign up successful!');
    } catch (error) {
      console.error('Error signing up:', error);

      if (error.code === 'auth/email-already-in-use') {
        toast.error('This email is already in use. Please use a different email.');
      } else {
        toast.error('Error signing up. Please try again.');
      }
    }
  };

  return (
    <section className="h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
          Sign up to create an account
        </h2>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({ values, handleChange }) => (
  <Form className="space-y-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <Field
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"
        type="text"
        id="name"
        name="name"
        placeholder="Full Name"
      />
      <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <Field
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
      />
      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
        Password
      </label>
      <Field
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring focus:ring-gray-400 focus:ring-opacity-50"
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
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
          )}
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;

