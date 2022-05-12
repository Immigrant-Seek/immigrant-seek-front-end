import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// This is where you render the Login Form component you created

function Login(){
    return (
        <div>
        <h2>Sign In</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

export default Login;