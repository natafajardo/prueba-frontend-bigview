import React from 'react';
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";


const ModalPut = ({insect, showModal}) => {
  const [newInsect, setNewinsect] = useState(insect)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (showModal) {
    handleShow();
  }

  const handleChange = ({ target }) => {
    setNewinsect({
      ...insect,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("envie form");

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: insect,

    };
    console.log(options.body);

    fetch(`/api/Classifications/${insect.id}`, options)
      .then(response => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Nuevo Insecto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body>
          
            <Form.Group className="mb-3">
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter scientificName" name="scientificName" value={newInsect.scientificName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter families" name="families" value={newInsect.families} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter lifespan" name="lifespan" value={newInsect.lifespan} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter order" name="order" value={newInsect.order} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter phylum" name="phylum" value={newInsect.phylum} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter kingdom" name="kingdom" value={newInsect.kingdom} onChange={handleChange} required />
            </Form.Group> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
        </Form>
        </Modal>
    </div>
  );
};

export default ModalPut;
