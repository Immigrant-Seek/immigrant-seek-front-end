import { useEffect, useState } from "react";    

function ReviewCard(props){
    const { review } = props;
    const [ loadedReview, setLoadedReview ] = useState([])

 
    useEffect(() => {
        fetch(`http://localhost:3030/review/${review.review_id}/user`)
        .then(res => res.json())
        .then((data) => {
            setLoadedReview(data)
        })
    }, [])

    return (
        <>
            <p key={review.review_id}>{review.review_body}</p> 
            <p className="card-text"><small className="text-muted">Reviewed by: {review.first_name}</small></p>
        </>
    )
}

export default ReviewCard