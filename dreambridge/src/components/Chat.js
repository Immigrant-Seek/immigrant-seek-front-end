import '../Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
function Chat () {
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
                <p className='chatMessage'>
                    <span className='senderName'>Other Person</span>
                    MESSAGE CONTENT
                    <span className='messageTimestamp'>{new Date().toUTCString()}</span>
                </p>
                <p className='chatMessage sentMessage'>
                    <span className='senderName'>Other Person</span>
                    MESSAGE CONTENT
                    <span className='messageTimestamp'>{new Date().toUTCString()}</span>
                </p>
            </div> 
            <div className='chatFooter'>
                <form>
                    <input placeholder='Type a message' type="text"/>
                    <button type='submit'>Send a message</button>
                </form>
            </div>
        </div>
    );
}

export default Chat