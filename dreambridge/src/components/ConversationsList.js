import React from 'react';
import ConversationCard from './ConversationCard';
import Context from '../context/Context';
function ConversationsList (props) {
    const {selectedConvoId, updateSelectedConvo, messagesSentCount} = props
    const context = React.useContext(Context);
    const user = context.verifiedUser.userInfo.user_id;
    const [listOfConvos, updateListOfConvos] = React.useState([]);
        React.useEffect(() => {
        fetch(`http://localhost:3030/clients/${user}/inbox`)
        .then(response => response.json())
        .then(data => {
            updateListOfConvos(data.conversations);
        })
    },[selectedConvoId])

    return (
    <>
        {listOfConvos.length === 0 ? 
        <div>
            You don't have any conversations open
        </div>
        :
        <div>
            {
                listOfConvos.map(conversationInfo => {
                    return <ConversationCard updateSelectedConvo = {updateSelectedConvo} convoDetails ={conversationInfo} messagesSentCount = {messagesSentCount}/>
                })
            }
        </div>
        }
    </>
    )
}

export default ConversationsList;