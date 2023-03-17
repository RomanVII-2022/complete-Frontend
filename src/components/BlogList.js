import React, {useState, useEffect} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from "react-redux";
import { getAllBlogs } from "../features/blog/blogSlice";
import { fetchBlogs } from "../features/blog/blogSlice";


export const BlogList = ({blogs}) => {

    // const blogs = useSelector(getAllBlogs)

    // const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [deleteShow, setDeleteShow] = useState(false);

    const handleDeleteClose = () => setDeleteShow(false);
    const handleDeleteShow = () => setDeleteShow(true);


    // useEffect(() => {
    //     dispatch(fetchBlogs())
    // }, [])

    return (
        <div>
                        <Row> 
                            {
                                blogs.map((blog) => (
                                    <Col md={6} style={{marginTop: "10px"}}>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <Card.Title><Link to={`/blog-detail/${blog.id}`}>{blog.title}</Link></Card.Title>
                                                <Card.Text>
                                                {blog.description.substring(0, 90)}...
                                                </Card.Text>
                                                <Button as={Link} to={`/blog-detail/${blog.id}`} variant="primary">Blog Details</Button>
                                                <button onClick={handleShow} style={{ marginLeft: "10px", pointerEvents: "auto" }}><FaEdit /></button> <div className="vr" /> <button onClick={handleDeleteShow}><MdDeleteOutline /></button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            
                            }
                        </Row>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Edit Blog</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container>
                                    <Form>
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
                                            <Form.Control type="text" placeholder="Enter title" name="title"/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows={3} name="description" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Author</Form.Label>
                                            <Form.Select aria-label="Default select example" name="author">
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
                                            Update
                                        </Button>
                                    </Form>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                            
                            </Modal.Footer>
                        </Modal>


                        <Modal show={deleteShow} onHide={handleDeleteClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Delete Blog</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="text-danger">Are you sure you want to delete this blog?</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleDeleteClose}>
                                Close
                            </Button>
                            <Form>
                                <Button variant="danger" onClick={handleDeleteClose}>
                                    Delete
                                </Button>
                            </Form>
                            </Modal.Footer>
                        </Modal>
        </div>
    );
}