import Sidebar from './InboxSidebar';
import Chat from './Chat';
import '/Users/jvredmoore/Marcy Lab School/immigrants-seek-front-end/dreambridge/src/Inbox.css';
import Nav from './Nav';
import React from 'react';
// use a modal from react strap to get popup for send a message button
function Inbox() {
    const [selectedConvoId,updateSelectedConvo] = React.useState(null);
    React.useEffect(() => {
        console.log(selectedConvoId);
    })
    return (
        <>
        <Nav />
        <div className = "Inbox">
            <div className = 'InboxBody'>
                <Sidebar updateSelectedConvo = {updateSelectedConvo}/>
                {selectedConvoId && <Chat selectedConvoId = {selectedConvoId}/>}
            </div>
        </div>
    </>
)}

export default Inbox