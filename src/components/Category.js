import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { getAllCategories } from '../features/category/categorySlice';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from "../features/category/categorySlice";

export const Category = () => {

    const categories = useSelector(getAllCategories)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Header bg="primary">Categories</Card.Header>
                                <ListGroup variant="flush">
                                    {
                                        categories.map((category) => (
                                            <ListGroup.Item key={category.id}><Link to='blog-category/1'>{category.name}</Link></ListGroup.Item>
                                        ))
                                    
                                    }
                                </ListGroup>
                            </Card>
    );
}