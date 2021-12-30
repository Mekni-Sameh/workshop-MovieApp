import React , {useState} from 'react'
import {Row,Card,Col,Button,Modal} from 'react-bootstrap';
import Rate from './Rate';
function filmsCard({films}) {

    function Example() {
        const [lgShow, setLgShow] = useState(false);

        return (
          <>
            <Button onClick={() => setLgShow(true)}>Trailer</Button>

            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                 {films.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{films.trailer}</Modal.Body>
            </Modal>
          </>
        );
      }
    return (
        <div>
            <Row xs={1} md={4} className="g-4"> {/* réviser bootstrap grid*/}
            {films.map((el, idx) => (
            <Col>
            <Card>
                <Card.Img variant="top" src={el.image} />
                <Card.Body>
                <Card.Title>{el.name}</Card.Title>
                <Card.Text>
                   {el.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer> <Rate rate={el.rating}/></Card.Footer>
                <Example />
            </Card>
            </Col>
  ))}
</Row>
        </div>
    )
}

export default filmsCard
