import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Context from '../context/Context';
import NavigationBar from '../components/Nav'
import { Container } from 'react-bootstrap';
function LawyerProfile(){
    const params = useParams();
    let navigate = useNavigate();
    const context = React.useContext(Context)

    const [ lawyer, updateCurrentLawyer ] = useState([])

    useEffect(() => {
        context.getAllLawyers().then(lawyersList => {
            updateCurrentLawyer(lawyersList.find(lawyers => lawyers.user_id == params.id))
        })
    }, [context.lawyersList])

    return (
        <>
        <NavigationBar/>
        <Container className="lawyer-container">
        <button onClick={() => navigate('/Connect-with-a-Lawyer')}>Back</button>

        <div className="card mb-3">
            <div className="row g-0">
            <div className="col-md-4">
            <img src={lawyer.profile_pic_link} className="img-fluid rounded-start image" alt="ohno"/>
            <h3>{lawyer.first_name} {lawyer.last_name}</h3>
                <p>{lawyer.firm}</p>
                <p>{lawyer.email}</p>
            </div>
    <div className="col-md-8">
      <div className="card-body padding">
        <h3 className="card-title">Biography:</h3>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <div className="button-group padding">
            <button type="button">Schedule an appointment</button>
            <button type="button">Chat with now</button>
        </div>
        <h3 className='padding'>Reviews:</h3>
        
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Write A Review" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
        </div>

      </div>
    </div>
  </div>
</div>
            {/* <div className="flex-container card mb-3">
                <div className="lawyer-pfp, image" sticky="top">
                    <img alt="oh no!" src={lawyer.profile_pic_link} className="image" />
                    <h3>{lawyer.first_name} {lawyer.last_name}</h3>
                    <p>{lawyer.firm}</p>
                    <p>{lawyer.email}</p>
                </div>
                <div>
                    <p>{lawyer.bio}</p>
                </div>
                <div>
                    <p>{lawyer.bio}</p>
                    <div>
                        <button type="button">Schedule an appointment</button>
                        <button type="button">Chat with now</button>
                    </div>
                    <h3>Reviews:</h3>
                    <div>
                        {/* Render Reviews here */}
                    {/* </div>
                    <div>
                        <input placeholder='Write a Review'/><button>Submit</button>
                    </div>
                </div>
            </div> */} 
        </Container>
        </>
    )
}

export default LawyerProfile
