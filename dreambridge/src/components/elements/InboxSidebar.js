import '../../InboxSidebar.css';
import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import {Avatar, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ConversationsList from './ConversationsList';
import Context from '../../context/Context';

function Sidebar (props) {
    const context = React.useContext(Context);
    console.log(context);
    const {selectedConvoId, updateSelectedConvo, messagesSentCount} = props;
    return (
        <div className="sidebar">
            <div className='sidebarHeader'>
                {context.verifiedUser.userInfo.is_lawyer ? <Avatar src = {context.verifiedUser.userInfo.profile_pic_link} /> : <Avatar src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fknowledgebase.lookseek.com%2Fimages%2FNature%2FInsects%2FButterfly%2FMonarch-Butterfly.jpg&f=1&nofb=1'/>}
                <h1>{context.verifiedUser.userInfo.first_name}'s Inbox</h1>
                <div className='sidebarHeaderRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <ConversationsList selectedConvoId = {selectedConvoId} updateSelectedConvo = {updateSelectedConvo} className='conversationsList' messagesSentCount = {messagesSentCount}/>
        </div>
    )
}

export default Sidebar