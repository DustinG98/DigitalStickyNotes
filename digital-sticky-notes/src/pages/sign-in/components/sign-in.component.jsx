import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../sign-in-up.scss'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextField } from 'formik-material-ui';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'

const SignIn = (props) => {
    //SIGN IN FORM

    // const [credentials, setCredentials] = useState({
    //     email: "",
    //     password: ""
    // })
    // const handlesChange = (e) => {
    //     setCredentials({ ...credentials,[e.target.name]: e.target.value })
    // }

    // let login = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/api/auth/users/signin', credentials)
    //         .then(res => {
    //             localStorage.setItem("auth-token", res.headers["auth-token"])
    //             localStorage.setItem("user_id", res.headers["user_id"])
    //             history.push('/notes')
    //         })
    // }
    return (
        <Card className="form">
            <Form>
                <Typography variant="h5" component="h1">Sign In</Typography>
                <Field name="email" type="email" label="Email" component={TextField}/>
                <Field name="password" type="password" label="Password" component={TextField}/>
                <div className="user-buttons">
                    <button type="submit">Sign In</button>
                    <Link to="/login/sign-up">Need an account?</Link>
                </div>
            </Form>
        </Card>
    )
}

const CreateForm = (props) => {
    const history = useHistory();
    const FormikSignInForm = withFormik({
        mapPropsToValues({ email, password }) {
            return {
                email: email || "",
                password: password || "",
            }
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be at least 8 characters long")
                .required("Password is required"),
        }),
        handleSubmit(values, { resetForm, setStatus, setSubmitting }) {
            axios.post('https://notes4you-be.herokuapp.com/api/auth/users/signin', values)
                .then(res => {
                    localStorage.setItem("auth-token", res.headers["auth-token"])
                    localStorage.setItem("user_id", res.headers["user_id"])
                    resetForm()
                    history.push('/notes')
                    props.setIsToken(true)
                })
                .catch(err => {
                    console.log(err)
                    resetForm()
                })
            
            
        }
    })(SignIn);

    return <FormikSignInForm/>
}


export default CreateForm
