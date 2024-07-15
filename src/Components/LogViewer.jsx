import React, { useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import LogsTable from './LogsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simulated fetch function
const fetchLogs = async () => {
  return [
    { id: 1, user: 'admin', field: 'name', movement_type: 'Update', timestamp: '2024-07-07T12:34:56' },
    { id: 2, user: 'user1', field: 'email', movement_type: 'Create', timestamp: '2024-07-06T08:21:45' },
    // more records...
  ];
};

function LogViewer() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadLogs = async () => {
      const data = await fetchLogs();
      setLogs(data);
    };

    loadLogs();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Usuario',
        accessor: 'user'
      },
      {
        Header: 'Campo',
        accessor: 'field'
      },
      {
        Header: 'Tipo de Movimiento',
        accessor: 'movement_type'
      },
      {
        Header: 'Fecha y Hora',
        accessor: 'timestamp'
      }
    ],
    []
  );

  return (
    <Container className="my-5">
      <h1 className="mb-4">Bitácora de Movimientos</h1>
      <LogsTable columns={columns} data={logs} />
    </Container>
  );
}

export default LogViewer;
