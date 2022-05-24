import React from 'react';
import ConversationCard from './ConversationCard';
import Context from '../../context/Context';
function ConversationsList (props) {
    const {updateSelectedConvo} = props
    const context = React.useContext(Context)
    const user = context.verifiedUser.userInfo.user_id
    const [listOfConvos, updateListOfConvos] = React.useState([])
        React.useEffect(() => {
        fetch(`http://localhost:3030/clients/${user}/inbox`)
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