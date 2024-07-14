// src/SalesStats.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const SalesStats = () => {
  const salesData = {
    totalSales: 3500,
    monthlyTarget: 5000,
    bestSeller: 'Laptop XYZ',
    salesByCategory: {
      desktops: 1200,
      laptops: 1800,
      accessories: 500,
    },
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Estadísticas de Ventas de Computadoras</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Ventas Totales</Card.Title>
              <Card.Text style={{ fontSize: '2.5rem' }}>${salesData.totalSales}</Card.Text>
              <ProgressBar now={(salesData.totalSales / salesData.monthlyTarget) * 100} label={`${Math.round((salesData.totalSales / salesData.monthlyTarget) * 100)}%`} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Mejor Vendedor</Card.Title>
              <Card.Text style={{ fontSize: '2.5rem' }}>{salesData.bestSeller}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Escritorios</Card.Title>
              <Card.Text style={{ fontSize: '2.5rem' }}>${salesData.salesByCategory.desktops}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Laptops</Card.Title>
              <Card.Text style={{ fontSize: '2.5rem' }}>${salesData.salesByCategory.laptops}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Accesorios</Card.Title>
              <Card.Text style={{ fontSize: '2.5rem' }}>${salesData.salesByCategory.accessories}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SalesStats;
