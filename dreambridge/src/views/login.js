import { Form } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import Context from '../context/Context';
import React from 'react';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';

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
                navigate('/Connect-with-a-lawyer');
            }
        })
    },[userInfo])



    return (
        <div>
        <h2>Sign In</h2>
        <Form onSubmit = {handleSubmit}>
         <Form.Group controlId="formBasicEmail">
              <Input name="email" type="text" placeholder="Email"/>
              <Input name="password" type="text" placeholder="Password" controlId="formBasicPassword"/>
          </Form.Group>
          <br></br>
            <Button variant="primary" type="submit" >
                Submit
            </Button>
        </Form>
        <br></br>
        <span>Don't have an account yet? Click <Link to="/signup">here</Link> to sign up </span>
        {/* This is a temp link */}
        <Link to="/Connect-with-a-lawyer">Click to go to main page</Link>
    </div>
    )
}

export default Login;