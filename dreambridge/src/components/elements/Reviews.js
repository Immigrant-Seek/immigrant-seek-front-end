// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Context from '../../context/Context';

// function Reviews(){
//     const params = useParams();
//     console.log(`These are the paramas ${params}`);
//     const context = React.useContext(Context)

//     const [ lawyerReviews, updateCurrentLawyerReviews ] = useState([])

//     useEffect(() => {
//         context.getLawyerReviews().then(reviewsList => {
//             updateCurrentLawyerReviews(reviewsList.find(reviews => lawyer.user_id == params.id))
//         })
//     }, [context.reviewsList])


//     return (
//         <div>
//             {context.lawyerReviews.map((review) => {
//                 return <ReviewCard key={review.review_id} review={review_body}/>
//             })}
//         </div>
//     )
// }

// export default Reviews;
