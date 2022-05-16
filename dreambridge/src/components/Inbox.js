import Sidebar from './InboxSidebar';
import Chat from './Chat';
import '../Inbox.css';
import Nav from './Nav';
function Inbox() {
    return (
        <>
        <Nav />
        <div className = "Inbox">
            <div className = 'InboxBody'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    </>
)}

export default Inbox