import React from 'react';
import { Card, Button } from 'react-bootstrap';






const CardInsect = ({insect}) => {


    return (
      <div>
      
        <Card>
        <Card.Img variant="top" src={insect.image} />
        <Card.Body>
          <Card.Title>{insect.scientificName}</Card.Title>
          <Card.Text>Familias: {insect.families}</Card.Text>
          <Card.Text>Esperanza de Vida: {insect.lifespan}</Card.Text>
          <Card.Text>{insect.order}</Card.Text>
          <Card.Text>{insect.phylum}</Card.Text>
          <Card.Text>{insect.kingdom}</Card.Text>
          <Button className="btn-danger me-2">Eliminar</Button>
          <Button className="btn-warning me-2">Editar</Button>
        </Card.Body>
      </Card>
      </div>
    )
}

export default CardInsect;
