import {Modal,Button,Form} from 'react-bootstrap'
import {useState} from 'react'
export default function Add({addHandler}) {
    //Modal Manipulation 
  const [show, setShow] = useState(false); 
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   //state for adding new  movie 

   const [title,setTitle]= useState("");
   const [description,setDescription]= useState("");
   const [image,setImage]= useState("");
   const [rating,setRating]= useState("");

    const addNewMovie = () => {

      addHandler({title,description,image,rating})
      handleClose()
    }
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Titlle</Form.Label>
    <Form.Control type="email" placeholder="Give a tittle of the film" onInput={(event)=> setTitle(event.target.value)}/>
    <Form.Label>Description</Form.Label>
    <Form.Control type="email" placeholder="Give a brief description of the film" onInput={(event)=> setDescription(event.target.value)}/>
    <Form.Label>Image URL</Form.Label>
    <Form.Control type="email" placeholder="Give the URL of the film" onInput={(event)=> setImage(event.target.value)} />
    <Form.Label>Rating</Form.Label>
    <Form.Control type="number" placeholder="Give Movie Rating" onInput={(event)=> setRating(event.target.value)} />
  </Form.Group>
  
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addNewMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  