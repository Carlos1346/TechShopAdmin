import React, { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import OrderTable from './OrderTable';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simulated fetch function
const fetchOrders = async () => {
  return [
    { id: 1, user: 'Usuario 1', total: 50.00, status: 'Pendiente', date: '2024-07-01' },
    { id: 2, user: 'Usuario 2', total: 30.00, status: 'Aprobada', date: '2024-06-15' },
    { id: 3, user: 'Usuario 3', total: 20.00, status: 'Enviada', date: '2024-07-05' },
    // more orders...
  ];
};

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };

    loadOrders();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Usuario',
        accessor: 'user',
      },
      {
        Header: 'Total',
        accessor: 'total',
      },
      {
        Header: 'Estado',
        accessor: 'status',
      },
      {
        Header: 'Fecha',
        accessor: 'date',
      },
    ],
    []
  );

  return (
    <Container className="my-5">
      <h1 className="mb-4">Órdenes de Compra</h1>
      <OrderTable columns={columns} data={orders} />
    </Container>
  );
}

export default OrderList;
