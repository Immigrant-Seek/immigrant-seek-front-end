import { Form } from 'react-bootstrap';
import Button from './Button';
import { ButtonGroup } from 'react-bootstrap';
import { Link, useNavigate} from 'react-router-dom';
import Context from '../../context/Context';
import React from 'react';

function LawyerSignup(){
    // state to keep track of the user that signs up, initailzied to object with values of empty strings
    const [userInfo, setUserInfo] = React.useState({})
    const context = React.useContext(Context);
    const navigate = useNavigate();

    // // when a user submits the form, we want to grab all the data from the form and update the state of the userInfo
    const handleSubmit = (event) => {
        event.preventDefault();
        const userFirstName = event.target.firstName.value;
        // console.log(userFirstName)
        const userLastName = event.target.lastName.value;
        const userEmail = event.target.email.value;
        const userPassword = event.target.passwrd.value;
        const userFirm = event.target.firm.value;
        const userBio = event.target.bio.value;
        const userPFP = event.target.pfp.value
        console.log(userFirstName, userLastName, userEmail, userPassword);

        setUserInfo({
            firstName : userFirstName,
            lastName : userLastName,
            email : userEmail,
            password : userPassword,
            firm : userFirm,
            bio : userBio,
            pfpLink : userPFP
        })
    }
    
    const postNewLawyer = async (userData) => {
        const response = await fetch("http://localhost:3030/lawyer/signup", {
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
        postNewLawyer(userInfo).then(newUserData => {
            console.log(newUserData);
            context.updateToken(newUserData.token)
        })
    }, [userInfo])

    return (
        <div className="form-background-img">
        <div className='form-centered'>
        <Form onSubmit={handleSubmit} className="user-form">
        <ButtonGroup className="form-btns-container">
            <Button className="form-btns signup-v1">
                <h2 className='h2-hover'>Sign Up</h2>
            </Button>
            <Button className="form-btns signin-v2">
                <Link to="/login"><h2 className='h2-hover'>Sign In</h2></Link>
            </Button>
        </ButtonGroup>
        <div className='lawyer-sign-up-flex-v2'>
        <div className="name-inputs">
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label className="labels input-deets">First Name</Form.Label>
                <Form.Control name ="firstName" type="text" placeholder="Enter first name" className='lawyer-input input-width'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label className="labels input-deets">Last Name</Form.Label>
                <Form.Control name ="lastName" type="text" placeholder="Enter last name" className='lawyer-input input-width'/>
            </Form.Group>
            </div>
            <div className="name-inputs">
            <Form.Group className="mb-3" controlId="formBasicFirm">
                <Form.Label className="labels input-deets">Firm</Form.Label>
                <Form.Control name ="firm" type="text" placeholder="Enter your firm" className='lawyer-input input-width'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicBio">
                <Form.Label className="labels input-deets">Biography</Form.Label>
                <Form.Control name ="bio" type="text" placeholder="Tell us about yourself" className='lawyer-input input-width'/>
            </Form.Group>
            </div>
            <div className="name-inputs">
            <Form.Group className="mb-3" controlId="formBasicFile">
                <Form.Label className="labels input-deets">Profile Pic</Form.Label>
                <Form.Control name ="pfp" type="text" placeholder='URL' className='lawyer-input input-width'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="labels input-deets">Email</Form.Label>
                <Form.Control name ="email" type="email" placeholder="Enter email" className='lawyer-input input-width'/>
            </Form.Group>
            </div>
            <div className="name-inputs">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="labels input-deets">Password</Form.Label>
                <Form.Control name ="passwrd" type="password" placeholder="Password" className='lawyer-input input-width'/>
            </Form.Group>
            </div >
            <Button color="light" type="submit" className='submit-btn v2'>
                Submit
            </Button>
            </div>
        </Form>
        {/* <span>Already have an account? Click <Link to="/login">here</Link> to sign in </span> */}
        {/* This is a temp link */}
        {/* <Link to="/Connect-with-a-lawyer">Click to go to main page</Link> */}
    </div>
    </div>
    )
}

export default LawyerSignup;