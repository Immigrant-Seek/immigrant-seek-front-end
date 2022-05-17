import Context from '../context/Context';
import React from 'react';
function ChatMessage (props) {
    const context = React.useContext(Context)
    let belongsToUser = props.messageDetails.is_sender_lawyer === context.verifiedUser.userInfo.is_lawyer
    return (
        <p className={belongsToUser ? "chatMessage sentMessage" : "chatMessage"}>
            <span className='senderName'>{belongsToUser ? "You" : "Other User"}</span>
                {props.messageDetails.message_body}
            <span className='messageTimestamp'>{props.messageDetails.TIME_STAMP}</span>
        </p>
    )
}

export default ChatMessage;