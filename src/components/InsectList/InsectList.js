import React from 'react';
import CardInsect from '../CardInsect/CardInsect';
import { Col, Row } from 'react-bootstrap';

const InsectList = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <CardInsect></CardInsect>
                </Col>
            ))}
        </Row>
    )
}

export default InsectList;
