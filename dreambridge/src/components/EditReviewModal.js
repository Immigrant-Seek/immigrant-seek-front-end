import { Modal, Button, Form, } from 'react-bootstrap'
import { useState } from 'react'

function EditReviewModal(props){

    const [ editInfo, setEditInfo ] = useState("")

    const handleEdit = (event) => {
        console.log("edit btn clicked")
        const reviewId = event.target.id
        console.log(reviewId)
        const editReviewBody = editInfo
        const patchUrl = `http://localhost:3030/reviews/${reviewId}`
        const options = {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: editReviewBody
        }
        fetch(patchUrl, options)
    }

    const updateInput = (event) => {
        setEditInfo(event.target.value)
    }

    return (
        <>
        <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <input as="textarea" rows={3} value={editInfo} onChange={updateInput} type="text" placeholder='Edit your review'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleEdit} id={props.id}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )

}

export default EditReviewModal;
