import '../VerticallyCenteredModal.css'
import {Modal, Button} from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import React from 'react';

function VerticallyCenteredModal(props) {
    const params = useParams();
    const [messageBody, updateMessageBody] = React.useState(null)
    const [ lawyer, updateCurrentLawyer ] = React.useState({})
    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.targe.messageInput.value
        updateMessageBody(message);
    }

    React.useEffect(()=> {
        fetch(`http://localhost:3030/lawyers/${params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            updateCurrentLawyer(data.lawyerInfo)
        })
    },[])

    // React.useEffect(() => {

    // })

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Send a message to {lawyer.first_name} {lawyer.last_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='ModalFooter'>
                <form>
                    <input name='messageInput' placeholder='Type a message' type="text"/>
                    <Button type='submit'>Send</Button>
                </form>
            </div>
        </Modal.Body>
      </Modal>
    );
  }

  export default VerticallyCenteredModal;