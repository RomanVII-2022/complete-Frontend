import React, { useState } from "react";
import { Coursel } from "./Coursel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { BlogList } from "./BlogList";
import { Category } from "./Category";
import { Popular } from "./Popular";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { postBlog } from "../features/blog/blogSlice";

export const Home = ({blogs}) => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddBlog = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        dispatch(postBlog(formData))

    }

    return (
        <div>
            <Coursel />
            <Container>
                <Row>
                    <Col md={8}>
                    <Button variant="primary" onClick={handleShow}>
                        Add Blog
                    </Button>
                        <BlogList blogs = {blogs} />
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <Category />
                            <Popular />
                        </Stack>
                    </Col>
                </Row>
            </Container>

            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form onSubmit={handleAddBlog}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Category</Form.Label>
                                <Form.Select aria-label="Default select example" name="category">
                                    <option>Select Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" name="title" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="description" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Author</Form.Label>
                                <Form.Select name="author" aria-label="Default select example">
                                    <option>Select Author</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" name="image" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>
            </Modal>
        </div>
    );
}