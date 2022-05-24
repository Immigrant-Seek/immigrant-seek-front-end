import React from "react";
import {Avatar} from '@material-ui/core';
import "../../ConversationCard.css";

function ConversationCard (props) {
    const [recentMessage, updateMostReccent] = React.useState("");
    React.useEffect(() => {
        fetch(`http://localhost:3030/conversations/${props.convoDetails.convo_id}/mostRecent`)
        .then(response => response.json())
        .then(data => updateMostReccent(data.mostRecentMessage[0].message_body))
    },[])

    const handleClick = () => {
        props.updateSelectedConvo(props.convoDetails.convo_id);
    }
    return (
        <div className="conversationCard" onClick={handleClick}>
            <Avatar src = {props.convoDetails.profile_pic_link} />
            <div className="conversationCardInfo">
                <h2>{`${props.convoDetails.first_name} ${props.convoDetails.last_name}`}</h2>
                <p>{recentMessage}</p>
            </div>
        </div>
    )
}

export default ConversationCard