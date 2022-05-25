import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Context from '../../context/Context';
import React from 'react';
import Input from '../elements/Input';
import Button from '../elements/Button';

function SignUp(){
    // state to keep track of the user that signs up, initailzied to object with values of empty strings
    const [userInfo, setUserInfo] = React.useState({})
    const context = React.useContext(Context);

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
        const response = await fetch("http://localhost:3030/signup", {
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
        postNewUser(userInfo).then(newUserData => {
            console.log(newUserData);
            context.updateToken(newUserData.token)
        })
    }, [userInfo])

    return (
        <div>
        <h2>Sign up using the form below!</h2>
        <Form onSubmit = {handleSubmit}>
        <Form.Group controlId="formBasicFirstName">
              <Input name="firstName" type="text" placeholder="Enter your first name"/>
            </Form.Group>
            <Form.Group controlId="formBasicLastName">
              <Input name="lastName" type="text" placeholder="Enter your last name"/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Input name="email" type="text" placeholder="Enter Email"/>
            </Form.Group>           
             <Form.Group controlId="formBasicPassword">
              <Input name="password" type="text" placeholder="Password"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Input name="password" type="text" placeholder="Confirm Password"/>
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        <br></br>
        <span>Already have an account? Click <Link to="/login">here</Link> to sign in </span>
        {/* This is a temp link */}
        <Link to="/Connect-with-a-lawyer">Click to go to main page</Link>
    </div>
    )
}

export default SignUp;