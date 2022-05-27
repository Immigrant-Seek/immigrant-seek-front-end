import Sidebar from './InboxSidebar';
import Chat from './Chat';
import '../../Inbox.css';
import Nav from './Nav';
import React from 'react';
import LawyerNav from './NavForLawyers';

// use a modal from react strap to get popup for send a message button
function Inbox() {
    const [selectedConvoId,updateSelectedConvo] = React.useState(null);
    const [messagesSentCount, updateMessagesSentCount] = React.useState(0);
    React.useEffect(() => {
        console.log(selectedConvoId);
    })
    return (
        <>
        <LawyerNav />
        <div className = "Inbox">
            <div className = 'InboxBody'>
                <Sidebar selectedConvoId = {selectedConvoId} updateSelectedConvo = {updateSelectedConvo} messagesSentCount = {messagesSentCount}/>
                {selectedConvoId && <Chat selectedConvoId = {selectedConvoId} updateSelectedConvo = {updateSelectedConvo} messagesSentCount = {messagesSentCount} updateMessagesSentCount = {updateMessagesSentCount}/>}
            </div>
        </div>
    </>
)}

export default Inbox