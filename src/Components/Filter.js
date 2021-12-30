import React from 'react'
import Rate from './Rate';
import {FormControl,Form,Button} from 'react-bootstrap';
function Filter() {
    return (
        <div>
            <Form className="d-flex">
        <FormControl
        
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          
        />
        <Button variant="outline-success">Search</Button>
      </Form>
  <Rate />
        </div>
    )
}

export default Filter
