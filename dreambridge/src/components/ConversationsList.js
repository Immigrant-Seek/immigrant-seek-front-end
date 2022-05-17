import React from 'react';
import ConversationCard from './ConversationCard';

function ConversationsList (props) {
    const {updateSelectedConvo} = props
    const [listOfConvos, updateListOfConvos] = React.useState([])
        React.useEffect(() => {
        fetch('http://localhost:3030/clients/25/inbox')
        .then(response => response.json())
        .then(data => {
            updateListOfConvos(data.conversations);
        })
    },[])

    return (
        <div>
            {
                listOfConvos.map(conversationInfo => {
                    return <ConversationCard updateSelectedConvo = {updateSelectedConvo} convoDetails ={conversationInfo} />
                })
            }
        </div>
    )
}

export default ConversationsList;