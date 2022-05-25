import '../../VerticallyCenteredModal.css';
import {Modal, Button} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import React from 'react';
// import Context from '../context/Context';
import Context from '../../context/ContextProvider';


function DeleteModal(props) {
  const [buttonClicked, updateButtonClicked] = React.useState(false)
  const handleClick = () => {
    // what should happen when the delete button is click?
    // the conversation should be deleted
    // the selected conov id should be reset to null
    // close the module 
    updateButtonClicked(true)
    props.onHide()
  }

  React.useEffect(() => {
    if(buttonClicked) {
      console.log("I get clicked")
      fetch(`http://localhost:3030/conversations/${props.selectedConvoId}`,{
        method: "DELETE"
      }
      )
      props.updateSelectedConvo(null);
    }
  },[buttonClicked])
  console.log(buttonClicked);
  console.log(props);
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter">
              Delete Conversation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className='ModalFooter'>
               Are you sure you want to delete this conversation? The entire message history will be deleted as well and this action cannot be undone.
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClick}>Delete</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default DeleteModal;