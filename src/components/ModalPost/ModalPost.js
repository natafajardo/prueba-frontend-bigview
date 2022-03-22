import React from 'react';
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";


const ModalPost = ({showModal, hideModal}) => {


  const [data, setdata] = useState({ image: "", scientificName: "", families: "", lifespan: "", order: "", phylum: "", kingdom: "" });

  const handleChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("envie form");



    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': '*/*',
        'Host': '<calculated when request is sent>',
        'Content-Length': '<calculated when request is sent>',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Cookie': 'ARRAffinity=79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5; ARRAffinitySameSite=79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5',

      },
      mode: 'no-cors',
      body: data,

    };
    console.log(options.body);



    fetch(`/api/Classifications`, options)
      .then(response => {
        console.log(response);
      })
      .catch((err) => console.log(err));


  }

  return (
    <div>
      <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Nuevo Insecto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <Modal.Body>
          
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter image url" name="image" value={data.image} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter scientificName" name="scientificName" value={data.scientificName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter families" name="families" value={data.families} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter lifespan" name="lifespan" value={data.lifespan} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter order" name="order" value={data.order} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter phylum" name="phylum" value={data.phylum} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Enter kingdom" name="kingdom" value={data.kingdom} onChange={handleChange} required />
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

export default ModalPost;
