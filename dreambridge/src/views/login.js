import { Form } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import Context from '../context/Context';
import React from 'react';
import Button from '../components/elements/Button';
import { ButtonGroup } from 'react-bootstrap';

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
            {/* <div className="dreams-bridge-logo-container">
                <img src='' alt="dreams bridge" className='dreams-bridge-logo'/>
            </div> */}
        <Form onSubmit = {handleSubmit} className="user-form">
        <ButtonGroup className="form-btns-container">
            <Button className="form-btns login-v1">
            <Link to="/login"><h2 className='h2-hover'>Sign In</h2></Link>
            </Button>
            <Button className="form-btns signup-v2">
                <Link to="/signup"><h2 className='h2-hover'>Sign Up</h2></Link>
            </Button>
        </ButtonGroup>
            <div className="margin-auto">
                <>
            <Form.Group className="mb-3 login-input" controlId="formBasicEmail">
                <Form.Label className="input-deets">Email</Form.Label>
                <Form.Control name ="email" type="email" placeholder="Enter email" className='lawyer-input input-width'/>
            </Form.Group>
            </>
            <>
            <Form.Group className="mb-3 login-input" controlId="formBasicPassword">
                <Form.Label className="input-deets">Password</Form.Label>
                <Form.Control name ="passwrd"  type="password" placeholder="Password" className='lawyer-input input-width'/>
            </Form.Group>
            </>
            </div>
            <Button variant="primary" type="submit" className='submit-btn'>
                Submit
            </Button>
        </Form>
        {/* <span>Don't have an account yet? Click <Link to="/signup">here</Link> to sign up </span>
        {/* This is a temp link */}
        {/* <Link to="/Connect-with-a-lawyer">Click to go to main page</Link> */}
    </div>
    )
}

export default Login;