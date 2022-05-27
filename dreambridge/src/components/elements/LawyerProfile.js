import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../../context/Context';
import NavigationBar from '../../components/elements/Nav'
import VerticallyCenteredModal from '././VerticallyCenteredModal';
import { Container, Form} from 'react-bootstrap';
import Button from './Button'
import wallsBanner from '../../assets/images/wallsBanner.png'

function LawyerProfile(){
    const [modalShow, setModalShow] = useState(false);
    const params = useParams();
    let navigate = useNavigate();
    const context = useContext(Context)
    const [ lawyer, updateCurrentLawyer ] = useState({})
    const [ currentReviews, setCurrentReviews ] = useState([])
    const [ postInfo, setPostInfo ] = useState(null)
    const [ count, setCount ] = useState(0)
    const [ reviewer, setReviewer ] = useState("")

    // Fetch to get lawyer's reviews
    useEffect(() => {
        fetch(`http://localhost:3030/lawyers/${params.id}/reviews`)
        .then(res => res.json())
        .then((data) => {
            setCurrentReviews(data.reviews)
            setReviewer(data.reviews.first_name)
        })
    }, [count])

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


    // Reviewer's name on update doesn't render once review is posted because newPostData.newReview doesn't return user's first name
    // 

    useEffect(() => {
        postReview(postInfo).then(newPostData => {
            setCurrentReviews([...currentReviews, {...newPostData.newReview, ...newPostData.reviewerInfo}])
            console.log(newPostData.newReview)
        })
    }, [postInfo])

    const handleDelete = (event) => {
        console.log("delete btn clicked")
        const reviewId = event.target.id
        const deleteurl = `http://localhost:3030/reviews/${reviewId}`
        const options = {
            method: "DELETE"
        }
        fetch(deleteurl, options)
        .then(res => {
            console.log(res)
            setCount(count + 1)
        })
    }

    return (
        <>
        <NavigationBar/>
        <div className="lawyer-banner">
            <img src={wallsBanner} className="banner-img"/>
        </div>
        <Container className="lawyer-container">
        <button className="lawyer-back-btn" onClick={() => navigate('/Connect-with-a-Lawyer')}><svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">

  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></button>
        <div className="lawyer-card mb-3">
            <div className="row g-0">
            <div className="col-md-4 lawyer-img-card">
            <img src={lawyer.profile_pic_link} className="img-fluid rounded image" alt="ohno"/>
            <h3 className='info-color lawyer-name'>{lawyer.first_name} {lawyer.last_name}</h3>
                <p className='info-color'><strong>Firm:</strong><p className='lawyer-firm'>{lawyer.firm}</p></p>
                <p className='info-color'><strong>Email:</strong><p className='lawyer-email'>{lawyer.email}</p></p>
                {context.isLoggedIn &&<div className="button-group padding">
            {/* MAKE CALENDLY LINK FOR OTHER LAWYERS */}
            <Button color="dark" type="button"><a href="https://calendly.com/dominic-cullen">Schedule an appointment</a></Button>
            <Button color="dark" onClick={() => setModalShow(true)}>
                Send A Message
            </Button>
            <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>}
            </div>
    <div className="col-md-8 bio-section-lawyer">
      <div className="card-body padding">
        <h3 className="card-title review-bottom-divider">Biography:</h3>
        <p className="card-text review-bottom-divider">{lawyer.bio}</p>
        
        
        {currentReviews.length === 0 ? <><h3 className='padding'>Reviews:</h3><h3>There are no reviews, add yours!</h3></> :
        <h3 className='padding'>Reviews:</h3>}
        <div>
        <div className='review-bottom-divider'>

            {currentReviews.map((review) => {
                return (
                    <>
                        <>
                        <div className='review-plus-user-svg'>
                        <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-circle, rounded-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        </>
                        <p className='review-card' key={review.review_id}>{review.review_body}</p>
                        </div>
                        <p className="card-text review-divider"><small className="text-muted">Reviewed by: {review.first_name}</small></p>
                        </>
                        {context.isLoggedIn && (context.verifiedUser.userInfo.user_id == review.client_id) &&
                        <>
                        <button onClick={handleDelete} key={review.review_id} id={review.review_id}>Delete</button>
                        </>
                        }
                    </>
                )
            })}
        </div>
     
        {context.isLoggedIn &&
        <div className="review-input">
            <Form onSubmit = {handleSubmit}>
                <input name ="reviewBody" type="text" placeholder="Write a Review"/><button type="submit">Submit</button>
            </Form>
        </div>}
    </div>
      </div>
    </div>
  </div>
</div>
        </Container>
        </>
    )
}

export default LawyerProfile
