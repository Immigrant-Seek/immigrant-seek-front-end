import '../Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import Context from '../context/Context';
import ChatMessage from './ChatMessage';
import DeleteModal from './deleteModal';

function Chat (props) {
    const context = React.useContext(Context);
    const {selectedConvoId, messagesSentCount, updateMessagesSentCount} = props // id of the conversations
    const [messagesList, updateMessagesList] = React.useState([])
    const [newChatMessage, updateNewChatMessage] = React.useState(null);
    const [convoLawyerInfo, updateConvoLawyerInfo] = React.useState({});
    const [modalShow, setModalShow] = React.useState(false);
    const user = context.verifiedUser.userInfo.user_id
    React.useEffect(() => {
        fetch(`http://localhost:3030/clients/${user}/inbox`)
        .then(response => response.json())
        .then(data => {
            const lawyerInfo = data.conversations.find(convo => convo.convo_id === selectedConvoId);
            console.log(lawyerInfo);
            updateConvoLawyerInfo(lawyerInfo);
        })
    },[selectedConvoId])
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
            updateMessagesSentCount(messagesSentCount+1)
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
    console.log(messagesSentCount)
    return (
        <div className="chat">
            <div className='chatHeader'>
                <Avatar src= {convoLawyerInfo.profile_pic_link} />
                <div className='chatHeaderInfo'>
                    <h3>{convoLawyerInfo.first_name} {convoLawyerInfo.last_name}</h3>
                </div>
                <div className="chatHeaderRight">
                    <IconButton onClick={() => setModalShow(true)}>
                        <DeleteForeverIcon />
                    </IconButton>
                    <DeleteModal selectedConvoId = {selectedConvoId} updateSelectedConvo= {props.updateSelectedConvo} show={modalShow} onHide={() => setModalShow(false)}/>
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