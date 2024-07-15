import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar las escalas y otros componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const BrandsSuppliersStats = () => {
  const statsData = {
    totalBrands: 25,
    totalSuppliers: 15,
    topBrand: "Brand A",
    topSupplier: "Supplier X",
    brandsSales: {
      "Brand A": 1200,
      "Brand B": 800,
      "Brand C": 600,
      "Brand D": 400,
      "Brand E": 300,
    },
    suppliersDeliveries: {
      "Supplier X": 500,
      "Supplier Y": 400,
      "Supplier Z": 300,
      "Supplier W": 200,
      "Supplier V": 100,
    },
  };

  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    card: {
      backgroundColor: "#ffffff",
      border: "none",
      borderRadius: "8px",
      boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    cardTitle: {
      fontSize: "1.2rem",
      color: "#333333",
    },
    statsValue: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#007BFF",
    },
    chartContainer: {
      height: "250px",
      marginTop: "20px",
    },
  };

  const brandsSalesData = {
    labels: Object.keys(statsData.brandsSales),
    datasets: [
      {
        label: "Ventas por Marca",
        backgroundColor: "#007BFF",
        borderColor: "#007BFF",
        borderWidth: 1,
        hoverBackgroundColor: "#0056b3",
        hoverBorderColor: "#0056b3",
        data: Object.values(statsData.brandsSales),
      },
    ],
  };

  const suppliersDeliveriesData = {
    labels: Object.keys(statsData.suppliersDeliveries),
    datasets: [
      {
        label: "Entregas por Proveedor",
        backgroundColor: [
          "#007BFF",
          "#28A745",
          "#FFC107",
          "#17A2B8",
          "#DC3545",
        ],
        borderColor: "#ffffff",
        borderWidth: 1,
        hoverBackgroundColor: [
          "#0056b3",
          "#218838",
          "#d39e00",
          "#138496",
          "#c82333",
        ],
        hoverBorderColor: "#ffffff",
        data: Object.values(statsData.suppliersDeliveries),
      },
    ],
  };

  return (
    <Container style={styles.container}>
      <h2 className="text-center mb-4">Estadísticas de Marcas y Proveedores</h2>
      <Row className="mb-4">
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Total de Marcas</Card.Title>
              <Card.Text style={styles.statsValue}>
                {statsData.totalBrands}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>
                Total de Proveedores
              </Card.Title>
              <Card.Text style={styles.statsValue}>
                {statsData.totalSuppliers}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Marca Top</Card.Title>
              <Card.Text style={styles.statsValue}>
                {statsData.topBrand}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Proveedor Top</Card.Title>
              <Card.Text style={styles.statsValue}>
                {statsData.topSupplier}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={12}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>
                Entregas por Proveedor
              </Card.Title>
              <div style={styles.chartContainer}>
                <Doughnut
                  data={suppliersDeliveriesData}
                  options={{
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                      },
                    },
                  }}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={12}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Ventas por Marca</Card.Title>
              <div style={styles.chartContainer}>
                <Bar
                  data={brandsSalesData}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                      },
                      y: {
                        beginAtZero: true,
                        ticks: {
                          stepSize: 200,
                        },
                        grid: {
                          display: true,
                          color: "rgba(0, 0, 0, 0.1)",
                        },
                      },
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

export default BrandsSuppliersStats;
