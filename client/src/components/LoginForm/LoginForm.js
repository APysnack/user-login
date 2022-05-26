import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../redux/userState";
import { useNavigate, Link } from "react-router-dom";

import {
  LoginContainer,
  FieldContainer,
  FormWrapper,
} from "./LoginForm.styles";

function LoginForm() {
  const dispatch = useDispatch();
  const [registrationEnabled, setRegistrationEnabled] = useState(false);
  const { user, error } = useSelector((state) => state.user.userState);
  const navigate = useNavigate();

  useEffect(() => {
    if(user?.email){
      navigate('/');
    }
  }, [user])

  const callLoginUser = (inputValues) => {
    let payload = {
      user: {
        email: inputValues.email,
        password: inputValues.password,
      },
    };
    dispatch(loginUser(payload));
  };

  const callRegisterUser = (inputValues) => {
    let payload = {
      user: {
        email: inputValues.email,
        password: inputValues.password,
      },
    };
    dispatch(registerUser(payload));
  };

  const handleShowRegistration = () => {
    setRegistrationEnabled(true);
  };

  return (
    <LoginContainer>
      <div style={{ marginTop: "2em" }}>
        {registrationEnabled ? "Registration Form" : "Login Form"}
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            if (registrationEnabled) {
              callRegisterUser(values);
            } else {
              callLoginUser(values);
            }
            resetForm();
          }, 500);
        }}
      >
        <Form>
          <FormWrapper>
            <FieldContainer>
              <label className="mb-6 block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <Field
                className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                placeholder="Please enter your email"
                type="email"
              />
              {/* {registrationEnabled ? (
                <>
                  <label className="mb-6 block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <Field
                    className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    name="username"
                    placeholder="Enter your Username"
                    type="username"
                  />
                </>
              ) : null} */}
              <label className="mb-6 block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <Field
                className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              {registrationEnabled ? (
                <>
                  <label className="mb-6 block text-gray-700 text-sm font-bold mb-2">
                    Confirm Your Password
                  </label>
                  <Field
                    className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    placeholder="Confirm your password"
                    type="password"
                  />
                </>
              ) : null}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                {registrationEnabled ? "Create Account" : "Login"}
              </button>
            </FieldContainer>
          </FormWrapper>
        </Form>
      </Formik>
      {error?.length > 0 ? error.map((err, i) => <div key={i}>{err}</div>) : null}
      <h1>
        Don't have an account?{" "}
        <button onClick={handleShowRegistration} style={{ color: "blue" }}>
          Register
        </button>
      </h1>
        <Link style={{ color: "blue" }} to="/password-reset">
          Click here if you forgot your password
        </Link>
    </LoginContainer>
  );
}

export default LoginForm;
