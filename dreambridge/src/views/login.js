import { Button, Form } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import Context from '../context/Context';
import React from 'react';


// This is where you render the Login Form component you created

function Login(){
    const [userInfo, setUserInfo] = React.useState({})
    const context = React.useContext(Context);
    const navigate = useNavigate();

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
            console.log(data);
            context.updateToken(data.token)
            context.updateVerifiedUser(data)
            console.log(context.verifiedUser.userInfo)
            if(data.userInfo !== undefined) {
                context.updateLoggedIn(true);
                context.verifiedUser.userInfo.is_lawyer ? navigate('/Connect-with-a-client') : navigate('/Connect-with-a-lawyer');
            }
        })
    },[userInfo])



    return (
        <div className='form-centered'>
             <button className='back-btn-signup' onClick={() => navigate('/')}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
        <h2>Sign In</h2>
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3 login-input" controlId="formBasicEmail">
                <Form.Label className="input-deets">Email</Form.Label>
                <Form.Control name ="email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 login-input" controlId="formBasicPassword">
                <Form.Label className="input-deets">Password</Form.Label>
                <Form.Control name ="passwrd"  type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className='login-input'>
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