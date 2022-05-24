// import { useEffect, useState } from "react";    

// function ReviewCard(props){
//     const { reviews, lawyer } = props;

//     console.log(lawyer);
//     cosole.log(reviews);
//     const [ currentReview, setCurrentReview ] = useState([])

//     useEffect(() => {
//         fetch(`http://localhost:3030/lawyers/${lawyer.user_id}/reviews`)
//         .then(res => res.json())
//         .then((data) => {
//             setCurrentReview(data)
//         })
//     }, [])


//     return (
//         <div>
//             <p review_body></p>
//         </div>
//     )
// }