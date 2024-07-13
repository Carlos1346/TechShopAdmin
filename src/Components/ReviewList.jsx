import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialReviews = [
  { id: 1, product: 'Producto 1', date: '2023-07-01', status: 'Pendiente', review: 'Muy buen producto' },
  { id: 2, product: 'Producto 2', date: '2023-06-15', status: 'Aprobada', review: 'Excelente calidad' },
  { id: 3, product: 'Producto 3', date: '2023-07-05', status: 'Enviada', review: 'Llegó rápido y en buen estado' },
];

const statuses = ['Pendiente', 'Aprobada', 'Cancelada', 'No Autorizada', 'Enviada', 'Entregada', 'Devuelta'];

function ReviewList() {
  const [reviews, setReviews] = useState(initialReviews);
  const [filterDate, setFilterDate] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleStatusChange = (id, newStatus) => {
    setReviews(reviews.map(review => review.id === id ? { ...review, status: newStatus } : review));
  };

  const filteredReviews = reviews.filter(review => 
    (filterDate ? review.date === filterDate : true) &&
    (filterStatus ? review.status === filterStatus : true)
  );

  return (
    <Container className="my-5">
      <h1 className="mb-4">Revisión de Reseñas de Productos</h1>
      <Form className="mb-4">
        <Row>
          <Col md={4}>
            <Form.Group controlId="filterDate">
              <Form.Label>Filtrar por Fecha</Form.Label>
              <Form.Control type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="filterStatus">
              <Form.Label>Filtrar por Estado</Form.Label>
              <Form.Control as="select" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                <option value="">Todos los Estados</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row>
        {filteredReviews.map(review => (
          <Col md={6} key={review.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{review.product}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{review.date}</Card.Subtitle>
                <Card.Text>{review.review}</Card.Text>
                <Form.Group controlId={`statusSelect-${review.id}`}>
                  <Form.Label>Estado de la Orden</Form.Label>
                  <Form.Control 
                    as="select" 
                    value={review.status} 
                    onChange={(e) => handleStatusChange(review.id, e.target.value)}
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ReviewList;
