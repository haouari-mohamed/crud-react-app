import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({ id: null, name: '', price: 0 });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get('http://localhost:8080/products');
        setProducts(response.data);
    };

    const handleShowModal = (product = { id: null, name: '', price: 0 }) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSaveProduct = async () => {
        if (selectedProduct.id) {
            await axios.put(`http://localhost:8080/products/${selectedProduct.id}`, selectedProduct);
        } else {
            await axios.post('http://localhost:8080/products', selectedProduct);
        }
        fetchProducts();
        handleCloseModal();
    };

    const handleDeleteProduct = async (id) => {
        await axios.delete(`http://localhost:8080/products/${id}`);
        fetchProducts();

        console.log(id)

       
    }; 

    return (
        <div className="container mt-5">
            <Button variant="primary" onClick={() => handleShowModal()}>Add Product</Button>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Button variant="warning" onClick={() => handleShowModal(product)}>Edit</Button>{' '}
                                <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct.id ? 'Edit Product' : 'Add Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={selectedProduct.name}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                value={selectedProduct.price}
                                onChange={(e) => setSelectedProduct({ ...selectedProduct, price: parseFloat(e.target.value) })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleSaveProduct}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductPage;