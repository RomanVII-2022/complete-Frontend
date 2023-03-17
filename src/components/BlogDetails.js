import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";


export const BlogDetails = ({blogs}) => {

    const { blogID } = useParams()

    const id = parseInt(blogID)

    return(
        <Container>
            {
            blogs.filter(blog => blog.id === id).map((blog) => (
                <Card key={blog.id}>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                    <Card.Text>
                        {blog.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
            ))
            
            }
        </Container>
    );
}