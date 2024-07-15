// src/Components/UsersTable.jsx
import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { Link } from "react-router-dom";

// Datos ficticios de ejemplo
const data = [
  { "id": 1, "name": "Alejandro García", "email": "alejandro.garcia@example.com" },
  { "id": 2, "name": "María Hernández", "email": "maria.hernandez@example.com" },
  { "id": 3, "name": "Juan Pérez", "email": "juan.perez@example.com" },
  { "id": 4, "name": "Ana López", "email": "ana.lopez@example.com" },
  { "id": 5, "name": "Carlos Sánchez", "email": "carlos.sanchez@example.com" },
  { "id": 6, "name": "Luis Martínez", "email": "luis.martinez@example.com" },
  { "id": 7, "name": "Guadalupe Rodríguez", "email": "guadalupe.rodriguez@example.com" },
  { "id": 8, "name": "Fernando Fernández", "email": "fernando.fernandez@example.com" },
  { "id": 9, "name": "Rosa Gómez", "email": "rosa.gomez@example.com" },
  { "id": 10, "name": "Jorge Ramírez", "email": "jorge.ramirez@example.com" },
  { "id": 11, "name": "Mónica Torres", "email": "monica.torres@example.com" },
  { "id": 12, "name": "Sergio Jiménez", "email": "sergio.jimenez@example.com" },
  { "id": 13, "name": "Patricia Díaz", "email": "patricia.diaz@example.com" },
  { "id": 14, "name": "Ricardo Cruz", "email": "ricardo.cruz@example.com" },
  { "id": 15, "name": "Laura Morales", "email": "laura.morales@example.com" }
]


// Definición de columnas
const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Nombre', accessor: 'name' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Acciones', accessor: 'actions', Cell: ({ row }) => (
    <>
      <Button  as={Link}
        to="/Dashboard/Altas/FormUsers" variant="warning" size="sm" className="me-2">Editar</Button>
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
