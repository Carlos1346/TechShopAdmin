import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar las escalas y otros componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GeneralStats = () => {
  // Datos ficticios para las gráficas
  const data = {
    productsVisited: {
      labels: ['Laptop XYZ', 'Escritorio ABC', 'Monitor 24"', 'Teclado RGB', 'Ratón Inalámbrico'],
      datasets: [
        {
          label: 'Visitas',
          data: [150, 120, 80, 60, 30],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    },
    productsSold: {
      labels: ['Laptop XYZ', 'Escritorio ABC', 'Monitor 24"', 'Teclado RGB', 'Ratón Inalámbrico'],
      datasets: [
        {
          label: 'Ventas',
          data: [200, 50, 30, 10, 5],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
        },
      ],
    },
    userPurchases: {
      labels: ['Usuario A', 'Usuario B', 'Usuario C', 'Usuario D', 'Usuario E'],
      datasets: [
        {
          label: 'Compras',
          data: [15, 8, 5, 3, 1],
          backgroundColor: 'rgba(255, 159, 64, 0.6)',
        },
      ],
    },
    visitorCount: {
      labels: ['Último Día', 'Último Mes', 'Último Año'],
      datasets: [
        {
          label: 'Visitantes',
          data: [500, 3000, 35000],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },
      ],
    },
  };

  // Estilos en línea para el componente (opcionalmente en un archivo CSS)
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    card: {
      backgroundColor: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '1.2rem',
      color: '#333333',
    },
  };

  return (
    <Container style={styles.container}>
      <h2 className="text-center mb-4">Estadísticas Generales</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Productos Más Visitados</Card.Title>
              <Bar data={data.productsVisited} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Productos Más Vendidos</Card.Title>
              <Bar data={data.productsSold} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Usuarios con Mayor Cantidad de Compras</Card.Title>
              <Bar data={data.userPurchases} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Cantidad de Visitantes</Card.Title>
              <Bar data={data.visitorCount} options={{ responsive: true }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralStats;
