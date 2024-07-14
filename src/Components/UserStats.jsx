// src/UserStats.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const UserStats = () => {
  // Datos ficticios de estadísticas de usuarios
  const userData = {
    totalUsers: 500,
    activeUsers: 350,
    newUsersThisMonth: 50,
    userLocations: {
      USA: 200,
      Canada: 100,
      Mexico: 50,
      Europe: 150,
    },
  };

  return (
    <Container style={{ padding: '20px' }}>
      <h2 className="text-center mb-4">Estadísticas de Usuarios</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Total de Usuarios</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{userData.totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Usuarios Activos</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{userData.activeUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Nuevos Usuarios Este Mes</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>{userData.newUsersThisMonth}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Ubicaciones de Usuarios</Card.Title>
              <ul>
                {Object.entries(userData.userLocations).map(([location, count]) => (
                  <li key={location}>{location}: {count}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserStats;
