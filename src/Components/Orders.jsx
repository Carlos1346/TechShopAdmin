// src/Orders.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';

const Orders = () => {
  // Datos ficticios de órdenes de compra
  const ordersData = [
    { id: 1, product: 'Laptop XYZ', quantity: 1, price: 1200, date: '2024-07-10' },
    { id: 2, product: 'Escritorio ABC', quantity: 2, price: 800, date: '2024-07-09' },
    { id: 3, product: 'Teclado RGB', quantity: 5, price: 100, date: '2024-07-08' },
    { id: 4, product: 'Ratón Inalámbrico', quantity: 3, price: 150, date: '2024-07-07' },
    { id: 5, product: 'Monitor 24"', quantity: 1, price: 300, date: '2024-07-06' },
  ];

  return (
    <Container style={{ padding: '20px' }}>
      <h2 className="text-center mb-4">Últimas Órdenes de Compra</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>${order.price}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
