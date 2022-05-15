import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import React from 'react';

// This is where you render the Login Form component you created

function Login(){
    const [userInfo, setUserInfo] = React.useState({})
    const context = React.useContext(Context);

    // when a user submits the form, we want to grab all the data from the form and update the state of the userInfo
    const handleSubmit = (event) => {
        event.preventDefault();
        const userEmail = event.target.email.value;
        const userPassword = event.target.passwrd.value;
        console.log(userEmail, userPassword);

        setUserInfo({
            email : userEmail,
            password : userPassword
        })
    }

    const loginAttempt = async(userData) => {
        const response = await fetch("http://localhost:3030/login", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json()
        return data;
    }

    React.useEffect(() => {
        loginAttempt(userInfo).then(data => {
            context.updateToken(data.token)
            context.updateVerifiedUser(data)
        })
    },[userInfo])

    React.useEffect(() => {
        console.log(context.token);
        console.log(context.verifiedUser);
    },[context.token])

    return (
        <div>
        <h2>Sign In</h2>
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name ="email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name ="passwrd"  type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        <span>Don't have an account yet? Click <Link to="/signup">here</Link> to sign up </span>
        {/* This is a temp link */}
        <Link to="/Connect-with-a-lawyer">Click to go to main page</Link>
    </div>
    )
}

export default Login;