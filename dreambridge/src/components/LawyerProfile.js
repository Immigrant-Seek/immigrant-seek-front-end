import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import NavigationBar from '../components/Nav'
import VerticallyCenteredModal from './VerticallyCenteredModal';
import { Container, Form, Button} from 'react-bootstrap';

// import Reviews from './Reviews';

function LawyerProfile(){
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();
    let navigate = useNavigate();
    const context = useContext(Context)
    const [ lawyer, updateCurrentLawyer ] = useState({})
    const [ currentReviews, setCurrentReviews ] = useState([])
    const [ postInfo, setPostInfo ] = useState(null)

    
    // Fetch to get lawyer's reviews
    useEffect(() => {
        fetch(`http://localhost:3030/lawyers/${params.id}/reviews`)
        .then(res => res.json())
        .then((data) => {
            setCurrentReviews(data.reviews)
        })
    }, [postInfo])

    // get the current lawyers information
    useEffect(()=> {
        fetch(`http://localhost:3030/lawyers/${params.id}`)
        .then(response => response.json())
        .then(data => {
            updateCurrentLawyer(data.lawyerInfo)
        })
    },[])

    // Submit Review
    const handleSubmit = (event) => {
        event.preventDefault();
        const reviewBody = event.target.reviewBody.value
        const lawyerReviewed = params.id
        const user = context.verifiedUser.userInfo.user_id
        setPostInfo({
            lawyer_id: lawyerReviewed,
            review_body: reviewBody,
            client_id: user
        })
        event.target.reset()
    }

    // Post Review Fetch
    const postReview = async(postData) => {
        const res = await fetch(`http://localhost:3030/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData)
        })
        const data = await res.json()
        return data;
    }

    useEffect(() => {
        postReview(postInfo).then(newPostData => {
            setCurrentReviews([...currentReviews, newPostData.newReview])
        })
    }, [postInfo])
    return (
        <>
        <NavigationBar/>
        <Container className="lawyer-container">
        <button onClick={() => navigate('/Connect-with-a-Lawyer')}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
        <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
            <img src={lawyer.profile_pic_link} className="img-fluid rounded-start image" alt="ohno"/>
            <h3>{lawyer.first_name} {lawyer.last_name}</h3>
                <p><strong>Firm:</strong> {lawyer.firm}</p>
                <p><strong>Email:</strong> {lawyer.email}</p>
            </div>
    <div className="col-md-8">
      <div className="card-body padding">
        <h3 className="card-title">Biography:</h3>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        {context.isLoggedIn &&<div className="button-group padding">
            {/* MAKE CALENDLY LINK DEPEND ON LAWYER NAME */}
            <button type="button"><a href="https://calendly.com/dominic-cullen" className='calendly'>Schedule an appointment</a></button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Send A Message
            </Button>
            <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>}
        <h3 className='padding'>Reviews:</h3>
        <div>
            {currentReviews.map((review) => {
                return <p key={review.review_id}>{review.review_body}</p>
            })}
        </div>
        {context.isLoggedIn &&
        <div>
            <Form onSubmit = {handleSubmit}>
                <input name ="reviewBody" type="text" placeholder="Write a Review"/><button type="submit">Submit</button>
            </Form>
        </div>}

      </div>
    </div>
  </div>
</div>
        </Container>
        </>
    )
}

export default LawyerProfile
