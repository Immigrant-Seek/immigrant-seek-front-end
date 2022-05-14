import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function LawyerCard(props){
    const { lawyer } = props;

    const [ selectedLawyer, setSelectedLawyer ] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3030/lawyers/${lawyer.user_id}`)
        .then(res => res.json())
        .then((data) => {
            setSelectedLawyer(data)
        })
    }, [])

    return (
        <div className="card">
            <div>
                <Link to={`lawyers/${lawyer.user_id}`}>
                <img alt="oh no!" src={lawyer.profile_pic_link} className="image"  />
                </Link>
            </div>
            <div className="content">
                <div className="header">
                    <h5>{lawyer.first_name} {lawyer.last_name}</h5>
                </div>
            </div>
        </div>
    )
}

export default LawyerCard;