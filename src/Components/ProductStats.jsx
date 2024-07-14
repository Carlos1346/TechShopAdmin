// src/ProductStats.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ProductStats = () => {
  // Datos ficticios de estadísticas de productos
  const productData = {
    totalProducts: 120,
    bestSellingProduct: 'Laptop XYZ',
    averageRating: 4.5,
    salesByCategory: {
      laptops: 80,
      desktops: 30,
      accessories: 10,
    },
  };

  return (
    <Container style={{ padding: '20px' }}>
      <h2 className="text-center mb-4">Estadísticas de Productos</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Total de Productos</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{productData.totalProducts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Producto Más Vendido</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{productData.bestSellingProduct}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Calificación Promedio</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{productData.averageRating} ⭐</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Ventas por Categoría</Card.Title>
              <ul>
                <li>Laptops: {productData.salesByCategory.laptops}</li>
                <li>Escritorios: {productData.salesByCategory.desktops}</li>
                <li>Accesorios: {productData.salesByCategory.accessories}</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductStats;
