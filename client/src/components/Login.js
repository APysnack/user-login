import React from 'react';
import styled from 'styled-components';
import {Formik, Form, Field } from 'formik';
import api from '../utils/api';
import axios from 'axios';


// todo: extract into separate API component
const API_URL = "http://localhost:3000"
const actions = {
    registerUser(payload){
        return new Promise((resolve, reject) =>{
            axios.post(API_URL + '/users', payload).then((response) => {
                console.log(response);
                resolve(response);
            }).catch((error) =>{
                console.log(error);
                reject(error);
            })
        })
    },

    loginUser(payload){
        return new Promise((resolve, reject) => {
            axios.post(`${API_URL}users/sign_in`, payload).then((response) => {
                console.log(response.data.headers.authorization);
                resolve(response)
            }).catch((error) =>{
                reject(error);
            })
        })
    },

    logoutUser({ commit }){
        const config = {
            headers: {
                authorization: 3,
            },
        };

        new Promise((resolve, reject) => {
            axios.delete(`${API_URL}users/sign_out`, config).then(() => {
            console.log("CHANGE AUTHORIZATION IN CONFIG TO THE AUTH TOKEN IN REDUX STATE ABOVE. Then @ this line of code use redux to reset set state of user info to null here");
            resolve(); }).catch((error) => {
                reject(error);
            });
        });
    },

    loginUserWithToken({ commit }, payload) {
        const config = {
            headers: {
                authorization: payload.auth_token,
            },
        };

        new Promise((resolve, reject) => {
            axios.get(`${API_URL}member-data`, config).then((response) => {
                console.log("should receive user info from server and set in in state using redux here");
                resolve(response)
            }).catch((error) =>{
                reject(error);
            })
        })
    },
}

function Login() {
    const [user, setUser] = React.useState(null);

    return (
        <>
            {user ? <div>Currently logged in as { user.username }</div>: null }
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

                            const payload = { user: { email: "mynewuser@gmail.com", password: "password", password_confirmation: "password" }};
                            actions.registerUser(payload);
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