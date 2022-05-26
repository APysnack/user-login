import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../redux/userState";
import {
  LoginContainer,
  FieldContainer,
  FormWrapper,
} from "./LoginForm.styles";

function LoginForm() {
  const dispatch = useDispatch();
  const [registrationEnabled, setRegistrationEnabled] = useState(false);

  const callLoginUser = (inputValues) => {
    let payload = {
      user: {
        email: inputValues.email,
        password: inputValues.password,
      },
    };
    console.log(payload)
    dispatch(loginUser(payload));
  };

  const callRegisterUser = (inputValues) => {
    let payload = {
      user: {
        email: inputValues.email,
        password: inputValues.password,
        password_confirmation: inputValues.passwordConfirmation,
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
      <h1>
        Don't have an account?{" "}
        <button onClick={handleShowRegistration} style={{ color: "blue" }}>
          Register
        </button>
      </h1>
    </LoginContainer>
  );
}

export default LoginForm;
