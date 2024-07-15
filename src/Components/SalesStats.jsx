import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar las escalas y otros componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SalesStats = () => {
  const salesData = {
    totalSales: 3500,
    monthlyTarget: 5000,
    bestSeller: "Laptop XYZ",
    salesByCategory: {
      desktops: 1200,
      laptops: 1800,
      accessories: 500,
    },
    monthlySales: [
      300, 500, 700, 800, 600, 1200, 900, 1100, 1500, 1700, 1300, 2000,
    ],
    quarterlySales: [1500, 2200, 1800, 3500],
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
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#007BFF",
    },
    chartContainer: {
      height: "250px",
      marginTop: "20px",
    },
  };

  const categoryData = {
    labels: ["Desktops", "Laptops", "Accessories"],
    datasets: [
      {
        label: "Ventas por Categoría",
        backgroundColor: ["#007BFF", "#28A745", "#FFC107"],
        borderColor: "rgba(0,123,255,0.9)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,123,255,0.6)",
        hoverBorderColor: "rgba(0,123,255,1)",
        data: [
          salesData.salesByCategory.desktops,
          salesData.salesByCategory.laptops,
          salesData.salesByCategory.accessories,
        ],
      },
    ],
  };

  const monthlySalesData = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Ventas Mensuales",
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
        data: salesData.monthlySales,
      },
    ],
  };

  const quarterlySalesData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Ventas Trimestrales",
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(153, 102, 255, 0.8)",
        hoverBorderColor: "rgba(153, 102, 255, 1)",
        data: salesData.quarterlySales,
      },
    ],
  };

  return (
    <Container style={styles.container}>
      <h2 className="text-center mb-4">
        Estadísticas de Ventas
      </h2>
      <Row className="mb-4">
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Ventas Totales</Card.Title>
              <Card.Text style={styles.statsValue}>
                ${salesData.totalSales}
              </Card.Text>
              <ProgressBar
                now={(salesData.totalSales / salesData.monthlyTarget) * 100}
                label={`${Math.round(
                  (salesData.totalSales / salesData.monthlyTarget) * 100
                )}%`}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Escritorios</Card.Title>
              <Card.Text style={styles.statsValue}>
                ${salesData.salesByCategory.desktops}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Laptops</Card.Title>
              <Card.Text style={styles.statsValue}>
                ${salesData.salesByCategory.laptops}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Accesorios</Card.Title>
              <Card.Text style={styles.statsValue}>
                ${salesData.salesByCategory.accessories}
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
                Ventas por Categoría
              </Card.Title>
              <div style={styles.chartContainer}>
                <Bar
                  data={categoryData}
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
                          stepSize: 500,
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
      <Row className="mb-4">
        <Col md={12}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Ventas Mensuales</Card.Title>
              <div style={styles.chartContainer}>
                <Line
                  data={monthlySalesData}
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
                          stepSize: 500,
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
      <Row className="mb-4">
        <Col md={12}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>
                Ventas Trimestrales
              </Card.Title>
              <div style={styles.chartContainer}>
                <Bar
                  data={quarterlySalesData}
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
                          stepSize: 1000,
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

export default SalesStats;
