import '../../VerticallyCenteredModal.css';
import {Modal, Button} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import React from 'react';
import Context from '../../context/Context';

function VerticallyCenteredModal(props) {
    const params = useParams();
    const context = React.useContext(Context);
    const [messageBody, updateMessageBody] = React.useState(null)
    const [ lawyer, updateCurrentLawyer ] = React.useState({})
    const [ messageSent, updateMessageSentStatus] = React.useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.target.messageInput.value
        updateMessageBody(message);
    }
    const handleClick = () => {
      updateMessageSentStatus(false);
    }
    //getting lawyers information to use for modal header
    React.useEffect(()=> {
        fetch(`http://localhost:3030/lawyers/${params.id}`)
        .then(response => response.json())
        .then(data => {
            updateCurrentLawyer(data.lawyerInfo)
        })
    },[])

    const allChecks = async() => {
      const client = context.verifiedUser.userInfo.user_id
      const lawyer = params.id
      const response = await fetch(`http://localhost:3030/verifyConversations`,{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          client_id : client,
          lawyer_id : lawyer
        })
      })
      const data = await response.json()
      const convoHistory = data.data
      const userIsLawyer = context.verifiedUser.userInfo.is_lawyer
      if(convoHistory.length !== 0 && messageBody !== null) {
        //then we want to add the message body we have from the form to 
        // this conversation
        const convoId = convoHistory[0].convo_id
        const postResponse = await fetch(`http://localhost:3030/conversations/${convoId}/`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                message : messageBody,
                is_sender_lawyer : userIsLawyer
            })
        })
        const postData = await postResponse.json()
        if(postData.newMessage) {
          updateMessageSentStatus(true)
        }
      } else if (convoHistory.length === 0 && messageBody !== null){
        const newConvoPostResponse = await fetch(`http://localhost:3030/conversations`,{
          method: "POST",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${context.token}`
          },
          body : JSON.stringify({
            client_id : client,
            lawyer_id : lawyer
          })
        })
        const newConvoPostData = await newConvoPostResponse.json()
        const newConvoId = newConvoPostData.conversation[0].convo_id

        const newConvoMessagePost = await fetch(`http://localhost:3030/conversations/${newConvoId}/`, {
          method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                message : messageBody,
                is_sender_lawyer : userIsLawyer
            })
        })
        const newConvoMessageData = await newConvoMessagePost.json()
        if(newConvoMessageData.newMessage) {
          updateMessageSentStatus(true)
        }
      }
    }
    // things that need to happen when the button is clicked 
    // make a fetch request to see if a conversation exists between the two users (verified user and lawyer )
    React.useEffect(() => {
      allChecks();
    },[messageBody])

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={handleClick}>
          <Modal.Title id="contained-modal-title-vcenter">
            Send a message to {lawyer.first_name} {lawyer.last_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='ModalFooter'>
              {messageSent === true && <h3>Message Sent! Check your inbox.</h3>}
                {messageSent === false && <form onSubmit={handleSubmit}>
                    <input name='messageInput' placeholder='Type a message' type="text"/>
                    <button type='submit'>Send</button>
                </form>
                }
            </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default VerticallyCenteredModal;