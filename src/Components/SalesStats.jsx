import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const SalesStats = ({ stats }) => {
  return (
    <Container>
      <h1 className="my-4 text-center">Estadísticas de Ventas</h1>
      <Row>
        {stats.map((stat, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-primary">{stat.title}</Card.Title>
                <Card.Text className="text-muted">{stat.subtitle}</Card.Text>
                <h3 className="my-3">{stat.value}</h3>
                <ProgressBar now={stat.progress} label={`${stat.progress}%`} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SalesStats;
