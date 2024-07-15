// src/Components/UsersTable.jsx
import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

// Datos ficticios de ejemplo
const data = [
  { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
  { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
  // Agrega más datos según sea necesario
];

// Definición de columnas
const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Nombre', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Acciones', accessor: 'actions', Cell: ({ row }) => (
    <>
      <Button variant="warning" size="sm" className="me-2">Editar</Button>
      <Button variant="danger" size="sm">Eliminar</Button>
    </>
  )}
];

const UsersTable = () => {
  const [filterInput, setFilterInput] = useState('');

  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, setGlobalFilter, previousPage, nextPage, canPreviousPage, canNextPage } = tableInstance;

  const handleFilterChange = e => {
    const value = e.target.value || '';
    setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <div className="p-3 bg-light">
      <h2 className="text-center mb-4">Gestión de Usuarios</h2>
      <InputGroup className="mb-3">
        <FormControl
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="Buscar usuarios"
        />
      </InputGroup>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <FaSortDown />
                        : <FaSortUp />
                      : <FaSort />}
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
      <div className="d-flex justify-content-between mt-3">
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Anterior
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default UsersTable;
