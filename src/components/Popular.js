import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export const Popular = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>Recent Posts</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item><Card.Img variant="top" src="holder.js/100px180" /> <Link to='/blog-detail/1'>Cras justo odio</Link></ListGroup.Item>
                <ListGroup.Item><Card.Img variant="top" src="holder.js/100px180" /> <Link to='/blog-detail/1'>Cras justo odio</Link></ListGroup.Item>
                <ListGroup.Item><Card.Img variant="top" src="holder.js/100px180" /> <Link to='/blog-detail/1'>Cras justo odio</Link></ListGroup.Item>
            </ListGroup>
        </Card>
    );
}