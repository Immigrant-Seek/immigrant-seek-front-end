import '../Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import React from 'react';
import Context from '../context/Context';
import ChatMessage from './ChatMessage';

function Chat (props) {
    const context = React.useContext(Context);
    const {selectedConvoId} = props // id of the conversations
    const [messagesList, updateMessagesList] = React.useState([])
    const [newChatMessage, updateNewChatMessage] = React.useState(null);

    React.useEffect(() => {
        fetch(`http://localhost:3030/conversations/${selectedConvoId}/all`)
        .then(response => response.json())
        .then(data => {
            updateMessagesList(data.allMessages)
        })
    },[selectedConvoId])

    React.useEffect(() => {
        //first find out if the signed in user is a lawyer 
        const userIsLawyer = context.verifiedUser.userInfo.is_lawyer
        fetch(`http://localhost:3030/conversations/${selectedConvoId}/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                message : newChatMessage,
                is_sender_lawyer : userIsLawyer
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            updateMessagesList([...messagesList, data.newMessage[0]])
        })
    }, [newChatMessage])
    React.useEffect(() => {
        console.log(messagesList);
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const messageBody = event.target.messageInput.value
        updateNewChatMessage(messageBody);
        event.target.messageInput.value = "";
    }
    return (
        <div className="chat">
            <div className='chatHeader'>
                <Avatar />
                <div className='chatHeaderInfo'>
                    <h3>Other Persons Name</h3>
                </div>
                <div className="chatHeaderRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='chatBody'>
                {messagesList.map(message => {
                    return <ChatMessage messageDetails = {message} />
                })}
            </div> 
            <div className='chatFooter'>
                <form onSubmit={handleSubmit}>
                    <input name='messageInput' placeholder='Type a message' type="text"/>
                    <button type='submit'>Send a message</button>
                </form>
            </div>
        </div>
    );
}

export default Chat