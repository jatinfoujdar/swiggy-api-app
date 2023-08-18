// Signup.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../firebase.js"



const Signup = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().name('Name').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });



  const handleSignup = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);
      toast.success('Sign up successful!'); 
    } catch (error) {
      console.error('Error signing up:', error);
      toast.error('Error signing up. Please try again.'); 
    }
  };


  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        <Form>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
