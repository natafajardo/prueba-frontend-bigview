import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { useState, useEffect } from "react";






const CardInsect = ({ insect }) => {

  const insectDelete = () => {

    fetch(`/api/Classifications/${insect.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data =>  {
        setshowModalDelete(false);
      })
      .catch(error => {
        setshowModalDelete(false);
      });

  }



  const lauchModalDelete = () => {
    setshowModalDelete(true);
  }

  const lauchModalEdite = () => {
    setshowModalEdite(true);
  }
  const [showModalDelete, setshowModalDelete] = useState(false);
  const [showModalEdite, setshowModalEdite] = useState(false);

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
          <Button className="btn-danger me-2" onClick={lauchModalDelete}>Eliminar</Button>
          <Button className="btn-secondary me-2" onClick={lauchModalEdite}>Editar</Button>
        </Card.Body>
      </Card>

      <Modal show={showModalDelete} onHide={setshowModalDelete}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Eliminar Insecto</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>¿Estás seguro de eliminar?</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={insectDelete}>Confirmar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

      <Modal show={showModalEdite} onHide={setshowModalEdite}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>

    </div>


  )
}

export default CardInsect;
