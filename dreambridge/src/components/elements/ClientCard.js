import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

import Button from "./Button";

function LawyerCard(props){
    const { client } = props;
    return (
        <div className="card lawyer-home-card">
            <div>
                <Link to={`lawyers/${client.user_id}`}>
                <img alt="oh no!" src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fknowledgebase.lookseek.com%2Fimages%2FNature%2FInsects%2FButterfly%2FMonarch-Butterfly.jpg&f=1&nofb=1' className="image"  />
                </Link>
            </div>
            <div className="content client-content">
                <div className="header">
                    <h4>{client.first_name} {client.last_name}</h4>
                </div>
                    <ul>
                        <li>
                            {client.email}
                        </li>
                    </ul>
                    <div className="lawyer-home-card-schedule-btn">  
                        <Button color="dark" className="schedule-btn">
                            Send A Message
                        </Button>
                    </div>
            </div>
        </div>
    )
}

export default LawyerCard;