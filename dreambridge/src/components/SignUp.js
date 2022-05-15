import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

function SignUp(){
    // state to keep track of the user that signs up, initailzied to object with values of empty strings
    const [userInfo, setUserInfo] = React.useState({})

    // when a user submits the form, we want to grab all the data from the form and update the state of the userInfo
    const handleSubmit = (event) => {
        event.preventDefault();
        const userFirstName = event.target.firstName.value;
        // console.log(userFirstName)
        const userLastName = event.target.lastName.value;
        const userEmail = event.target.email.value;
        const userPassword = event.target.passwrd.value;
        console.log(userFirstName, userLastName, userEmail, userPassword);

        setUserInfo({
            firstName : userFirstName,
            lastName : userLastName,
            email : userEmail,
            password : userPassword
        })
    }
    
    const postNewUser = async (userData) => {
        const response = await fetch("http://localhost:3030/newUser", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(userData)
        })
        return response;
    }

    React.useEffect(() => {
        fetch("http://localhost:3030/newUser", {
            method : "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({...userInfo})
        }).then(response => response.json())
        .then(data => console.log(data))
    }, [userInfo])

    return (
        <div>
        <h2>Sign up using the form below!</h2>
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control name ="firstName" type="text" placeholder="Enter your first name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name ="lastName" type="text" placeholder="Enter your last name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name ="email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name ="passwrd" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        {/* This is a temp link */}
        <Link to="/Connect-with-a-lawyer">Click to go to main page</Link>
    </div>
    )
}

export default SignUp;