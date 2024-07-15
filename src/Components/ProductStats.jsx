import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'; // Importamos los íconos de estrellas
//import './ProductStats.css'; // Archivo de estilos CSS personalizados

const ProductStats = () => {
  // Datos ficticios de estadísticas de productos
  const productData = {
    totalProducts: 120,
    bestSellingProduct: 'Laptop XYZ',
    averageRating: 4.5,
    salesByCategory: {
      laptops: 80,
      desktops: 30,
      accessories: 10,
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

  // Función para calcular el porcentaje de ventas por categoría
  const calculatePercentage = (sales) => {
    const totalSales = Object.values(productData.salesByCategory).reduce((acc, curr) => acc + curr, 0);
    return (sales / totalSales) * 100;
  };

  // Función para renderizar el componente de estrellas basado en la calificación promedio
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Agregamos estrellas completas
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={i} color="#ffc107" />);
    }

    // Agregamos media estrella si corresponde
    if (hasHalfStar) {
      stars.push(<BsStarHalf key={stars.length} color="#ffc107" />);
    }

    // Agregamos estrellas vacías si es necesario para completar 5 estrellas
    while (stars.length < 5) {
      stars.push(<BsStar key={stars.length} color="#e9ecef" />);
    }

    return stars;
  };

  // Datos para el gráfico de barras
  const data = {
    labels: ['Laptops', 'Escritorios', 'Accesorios'],
    datasets: [
      {
        label: 'Ventas por Categoría',
        backgroundColor: ['#007BFF', '#28A745', '#FFC107'],
        borderColor: 'rgba(0,123,255,0.9)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0,123,255,0.6)',
        hoverBorderColor: 'rgba(0,123,255,1)',
        data: [productData.salesByCategory.laptops, productData.salesByCategory.desktops, productData.salesByCategory.accessories],
      },
    ],
  };

  return (
    <Container style={styles.container}>
      <h2 className="text-center mb-4">Estadísticas de Productos</h2>
      <Row>
        <Col md={4} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Total de Productos</Card.Title>
              <Card.Text style={styles.statsValue}>{productData.totalProducts}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Producto Más Vendido</Card.Title>
              <Card.Text style={styles.statsValue}>{productData.bestSellingProduct}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Calificación Promedio</Card.Title>
              <div className="stars-container">{renderStars(productData.averageRating)}</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        
        <Col md={12} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Ventas por Categoría</Card.Title>
              <div style={styles.chartContainer}>
                <Bar
                  data={data}
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
              <Row className="mt-3">
                {Object.keys(productData.salesByCategory).map((category, index) => (
                  <Col key={index} className="mb-2">
                    <small>{category}</small>
                    <ProgressBar now={calculatePercentage(productData.salesByCategory[category])} label={`${calculatePercentage(productData.salesByCategory[category]).toFixed(1)}%`} />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductStats;
