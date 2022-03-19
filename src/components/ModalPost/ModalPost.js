import { useState} from "react";
import { Form, Button } from "react-bootstrap";


const ModalPost = () => {

    const [data, setdata] = useState({image:"", scientificName:"", families:"", lifespan:"", order:"", phylum:"", kingdom:"" });

    const handleChange = ({target}) => {
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
          },
          body: JSON.stringify(data),
          };

      fetch(`${url}/api/Classifications`, options)
          .then(response => {
            console.log(response);
          }) 
          .catch((err) => console.log(err));
          
    }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
    
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter image url" name="image" value={data.image} onChange={handleChange} required/>
        </Form.Group>
    
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter scientificName" name="scientificName" value={data.scientificName} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter families" name="families" value={data.families} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter lifespan" name="lifespan" value={data.lifespan} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter order" name="order" value={data.order} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter phylum" name="phylum" value={data.phylum} onChange={handleChange} required/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter kingdom" name="kingdom" value={data.kingdom} onChange={handleChange} required/>
        </Form.Group>


        <Button variant="success" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default ModalPost;
