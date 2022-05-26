import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";


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
        <div className="card lawyer-home-card">
            <div>
                <Link to={`lawyers/${lawyer.user_id}`}>
                <img alt="oh no!" src={lawyer.profile_pic_link} className="image"  />
                </Link>
            </div>
            <div className="content">
                <div className="header">
                    <h4>{lawyer.first_name} {lawyer.last_name}</h4>
                </div>
                    <ul>
                        <li>
                            {lawyer.firm}
                        </li>
                    </ul>
                <div>
                    <p>Lorem ipsum quis nostrud exercitation commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="lawyer-home-card-schedule-btn">
                    <Button color="dark" className="schedule-btn">
                        Schedule appointment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LawyerCard;