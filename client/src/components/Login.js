import React from 'react';
import styled from 'styled-components';
import {Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginWithToken, logoutUser, registerUser } from '../redux/userState';

const tokenPayload = { headers: {
    authorization: localStorage.getItem("auth_token")
}}

function Login() {
    const { user } = useSelector(state => state.user.userState);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        if(tokenPayload.headers.authorization){
            callLoginWithToken()
        }
    }, [])
    

    const payload = { user: {
        email: "itd@gmail.com",
        password: "password",
        password_confirmation: "password",
        }
    }

    const callLoginUser = () => {
        dispatch(loginUser(payload))
    }

    const callRegisterUser = () => {
        dispatch(registerUser(payload))
    }

    const callLogoutUser = () => {
        dispatch(logoutUser(tokenPayload))
    }
    
    const callLoginWithToken = () => {
        dispatch(loginWithToken(tokenPayload))
    }


    React.useEffect(() => {
        if(user){
            console.log(user.id);
        }
    }, [user]);

    return (
        <>  
            <button onClick={callLoginUser}>Log In</button>
            <button onClick={callRegisterUser}>Register</button>
            <button onClick={callLogoutUser}>Log Out</button>
            <button onClick={callLoginWithToken}>Log In With Token</button>
            { user ? <h1>Logged in as {user.email}</h1> : null}
            <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validate={values => {
                        const errors = {};
                        if(!values.email) {
                            errors.email = 'Required';
                        }
                    }}
                    onSubmit = {(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <FormWrapper>
                            <FieldContainer>
                            <label className="mb-6 block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <Field
                            className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name="email"
                            placeholder="Please enter your email"
                            type="email"
                        />
                        <label className="mb-6 block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Password</label>
                        <Field
                            className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            type="password"
                        />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>

                            </FieldContainer>
                        </FormWrapper>
                    </Form>
            </Formik>
        </>
  )
}

export default Login

const FormWrapper = styled.div`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.body}
`

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50vw;
`