import React, { useState } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialReviews = [
  { 
    id: 1, 
    product: 'Xtreme Pc Gaming Asus Geforce Rtx 4060 Ti Intel Core I7 12700f 32gb Ssd 1tb Wifi', 
    date: '2023-07-01', 
    status: 'Pendiente', 
    review: 'Muy buen producto',
    image: 'https://http2.mlstatic.com/D_NQ_NP_818665-MLU76495838883_052024-O.webp', // URL de ejemplo de la imagen
  },
  { 
    id: 2, 
    product: 'Tarjeta Video Nvidia Gigabyte Rtx 3050 Windforce Oc V2 8gb', 
    date: '2023-06-15', 
    status: 'Aprobada', 
    review: 'Excelente calidad',
    image: 'https://http2.mlstatic.com/D_NQ_NP_963077-MLM74440169646_022024-O.webp', // URL de ejemplo de la imagen
  },
  { 
    id: 3, 
    product: 'Pc Gamer Cpu Amd Ryzen 5600g Ram 16gb Ddr4 240gb Ssd Wi-fi', 
    date: '2023-07-05', 
    status: 'Enviada', 
    review: 'Llegó rápido y en buen estado',
    image: 'https://http2.mlstatic.com/D_NQ_NP_639692-MLA53739072631_022023-O.webp', // URL de ejemplo de la imagen
  },
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
      <h2 className="text-center mb-4">Reseñas de productos</h2>
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
          <Col md={4} key={review.id}>
            <Card className="mb-3">
              <Card.Img 
                variant="top" 
                src={review.image} 
                alt={review.product} 
                style={{ height: '250px'}} // Estilos en línea para la imagen
              />
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
      {filteredReviews.length === 0 && (
        <div className="no-results">
          No se encontraron resultados para los filtros seleccionados.
        </div>
      )}
    </Container>
  );
}

export default ReviewList;
