import React from 'react';
import CardInsect from '../CardInsect/CardInsect';
import { Col, Row } from 'react-bootstrap';


const InsectList = ({insectList}) => {

    
    return (
        <div className="mb-5">
        <Row xs={1} md={2} className="g-4">
            {insectList.map((insect, idx) => (
                <Col    key={idx} >
                    <CardInsect insect={insect}></CardInsect>
                    
                </Col>
            ))}
        </Row>
        </div>
    )
}

export default InsectList;
