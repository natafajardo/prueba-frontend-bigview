import React from 'react';
import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";


const ModalPost = () => {

  const launchModal = () => {
    setshowModal(true);
  }

  const [showModal, setshowModal] = useState(false);

  const [data, setdata] = useState({ image: "", scientificName: "", families: "", lifespan: "", order: "", phylum: "", kingdom: "" });

  const handleChange = ({ target }) => {
    setdata({
      ...data,
      [target.name]: target.value
    })
  }

  const url = "https://insectsapi.azurewebsites.net";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("envie form");



    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
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
      <Modal show={showModal} onHide={setshowModal}>
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
