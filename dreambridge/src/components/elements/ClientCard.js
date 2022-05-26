import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function LawyerCard(props){
    const { client } = props;

    return (
        <div className="card">
            <div>
                <Link to={`lawyers/${client.user_id}`}>
                <img alt="oh no!" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fknowledgebase.lookseek.com%2Fimages%2FNature%2FInsects%2FButterfly%2FMonarch-Butterfly.jpg&f=1&nofb=1' className="image"  />
                </Link>
            </div>
            <div className="content">
                <div className="header">
                    <h5>{client.first_name} {client.last_name}</h5>
                </div>
            </div>
        </div>
    )
}

export default LawyerCard;