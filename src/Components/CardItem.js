import React from 'react'
import { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../images/logo.jpg'

const CardItem = () => {
  return (
    <Fragment>
    
    <Card className='d-flex' style={{ width: '13.11rem' ,backgroundColor:'transparent' ,margin:'5%',cursor:'pointer'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className='textCard' >Card Title</Card.Title>
        <Card.Text className='titleCard'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{backgroundColor:'transparent'}}>Cras justo odio</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

    
    </Fragment>
  )
}

export default CardItem
