import React from "react";
import {Avatar} from '@material-ui/core';
import "../ConversationCard.css";

function ConversationCard () {
    return (
        <div className="conversationCard">
            <Avatar />
            <div className="conversationCardInfo">
                <h2>Other persons name</h2>
                <p>Most recent message</p>
            </div>
        </div>
    )
}

export default ConversationCard