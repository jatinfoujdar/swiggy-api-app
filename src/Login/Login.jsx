// Login.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from "../firebase.js"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const Login = () => {
  const handleLogin = async (values) => {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      toast.success('Logged in successfully!'); 
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Error logging in. Please check your credentials.'); 
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
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
          <button type="submit">Log In</button>
        </Form>
      </Formik>
      <ToastContainer /> 
    </div>
  );
};

export default Login;
