import React from 'react';
import styled from 'styled-components';
import {Formik, Form, Field } from 'formik';
import api from '../utils/api';

function Login() {
    const [user, setUser] = React.useState(null);

    // todo: design API call to check if there is a CurrentUser logged in. 
    // setUser on page load if so

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
                            const user = { email: "ENTEREMAILHERE", password: "ENTERPASSWORDHERE" };
                            api.login(user).then(response => {
                                if(response.user){
                                    setUser(response.user);
                                }
                                else {
                                    console.log(response);
                                }

                            })
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