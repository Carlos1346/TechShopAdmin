import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

const LatestOrders = ({ orders }) => {
  return (
    <Container>
      <h1 className="my-4 text-center">Últimas Órdenes de Compra</h1>
      <Table striped bordered hover responsive className="shadow-sm">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const App = () => {
  const stats = [
    {
      title: 'Ventas Totales',
      subtitle: 'Último Mes',
      value: '$25,000',
      progress: 75
    },
    {
      title: 'Clientes Nuevos',
      subtitle: 'Último Mes',
      value: '320',
      progress: 50
    },
    {
      title: 'Pedidos Procesados',
      subtitle: 'Último Mes',
      value: '1,200',
      progress: 60
    }
  ];

  const orders = [
    {
      id: 1,
      customer: 'John Doe',
      date: '2024-07-10',
      total: '$150.00',
      status: 'Enviado'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      date: '2024-07-11',
      total: '$250.00',
      status: 'Procesando'
    },
    {
      id: 3,
      customer: 'Carlos Mendoza',
      date: '2024-07-12',
      total: '$300.00',
      status: 'Completado'
    }
  ];

  return (
    <div className="App">
      <SalesStats stats={stats} />
      <LatestOrders orders={orders} />
    </div>
  );
};

export default App;
