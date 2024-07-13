import React, { useState, useEffect, useMemo } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
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

function Example({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state,
    canNextPage,
    canPreviousPage,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    pageOptions,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;

  return (
    <>
      <Form.Control
        type="text"
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Buscar..."
        className="mb-3"
      />
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="pagination">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
        <span>
          Página <strong>{page.length} de {pageOptions.length}</strong>
        </span>
      </div>
    </>
  );
}

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

export default Example;
