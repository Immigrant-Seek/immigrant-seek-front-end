import '../InboxSidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import {Avatar, IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ConversationCard from './ConversationCard';

function Sidebar () {
    return (
        <div className="sidebar">
            <h1>I am a sidebar</h1>
            <div className='sidebarHeader'>
                <Avatar/>
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
            <div className='conversationsList'>
                <ConversationCard />
                <ConversationCard />
                <ConversationCard />
            </div>
        </div>
    )
}

export default Sidebar