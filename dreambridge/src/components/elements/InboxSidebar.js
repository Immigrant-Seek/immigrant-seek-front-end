import '/Users/jvredmoore/Marcy Lab School/immigrants-seek-front-end/dreambridge/src/InboxSidebar.css';
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
                <Avatar/>
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