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
    statsValue: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#007BFF',
    },
    chartContainer: {
      height: '250px', // Ajusta la altura del gráfico según sea necesario
      marginTop: '20px',
    },
  };

  // Datos para el gráfico de barras
  const locationData = {
    labels: Object.keys(userData.userLocations),
    datasets: [
      {
        label: 'Usuarios por Ubicación',
        backgroundColor: ['#007BFF', '#28A745', '#FFC107', '#DC3545'],
        borderColor: 'rgba(0,123,255,0.9)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,123,255,0.6)',
        hoverBorderColor: 'rgba(0,123,255,1)',
        data: Object.values(userData.userLocations),
      },
    ],
  };

  return (
    <Container style={styles.container}>
      <h2 className="text-center mb-4">Estadísticas de Usuarios</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Total de Usuarios</Card.Title>
              <Card.Text style={styles.statsValue}>{userData.totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Usuarios Activos</Card.Title>
              <Card.Text style={styles.statsValue}>{userData.activeUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Nuevos Usuarios Este Mes</Card.Title>
              <Card.Text style={styles.statsValue}>{userData.newUsersThisMonth}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Ubicaciones de Usuarios</Card.Title>
              <div style={styles.chartContainer}>
                <Bar
                  data={locationData}
                  width={null}
                  height={null}
                  options={{
                    maintainAspectRatio: false,
                    legend: {
                      display: false,
                    },
                    scales: {
                      xAxes: [{
                        gridLines: {
                          display: false,
                        },
                      }],
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                          stepSize: 10,
                        },
                        gridLines: {
                          display: true,
                          color: 'rgba(0, 0, 0, 0.1)',
                        },
                      }],
                    },
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserStats;

