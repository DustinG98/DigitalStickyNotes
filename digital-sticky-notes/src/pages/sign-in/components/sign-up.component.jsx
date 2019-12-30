import React from 'react'
import '../sign-in-up.scss'
import { Link } from 'react-router-dom'

import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { TextField } from 'formik-material-ui';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const SignUp = () => {
    //SIGN UP FORM
    return (
        <Card className="form">
            <Form>
                <Typography variant="h5" component="h1">Sign Up</Typography>
                <Field type="text" name="username" label="Username" component={TextField}/>
                <Field type="email" color="primary" name="email" label="Email Address" component={TextField}/>
                <Field name="password" type="password" label="Password" component={TextField}/>
                <Field name="confirmPassword" type="password" label="Confirm Password" component={TextField}/>
                <div className="user-buttons">
                    <button type="submit">Sign Up</button>
                    <Link to="/login">Have an account?</Link>
                </div>
            </Form>
        </Card>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ username, email, password, confirmPassword }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || "",
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "Username must be at least 4 characters long")
            .required("Username is required"), 
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Passwords must match")
            .required("Password Confirmation is required")

    }),
    handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
        console.log(values)
        resetForm();
        
    }
})(SignUp)

export default FormikSignUpForm
