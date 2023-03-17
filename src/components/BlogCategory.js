import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { BlogList } from "./BlogList";
import { Category } from "./Category";
import { Popular } from "./Popular";

export const BlogCategory = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <BlogList />
                    </Col>
                    <Col>
                        <Stack gap={3}>
                            <Category />
                            <Popular />
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}