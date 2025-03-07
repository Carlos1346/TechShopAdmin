// src/Components/CategoriesTable.jsx
import React, { useState } from 'react';
import { Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useTable, useSortBy, usePagination, useGlobalFilter } from 'react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

// Datos ficticios de ejemplo
const data = [
  { "id": 1, "name": "Computadora Armada", "description": "Computadoras ensambladas listas para usar" },
  { "id": 2, "name": "Procesador", "description": "Unidades de procesamiento central (CPU)" },
  { "id": 3, "name": "Tarjeta Madre", "description": "Placas base para diferentes tipos de sistemas" },
  { "id": 4, "name": "Memoria RAM", "description": "Módulos de memoria de acceso aleatorio" },
  { "id": 5, "name": "Disco Duro", "description": "Discos duros y unidades de estado sólido (SSD)" },
  { "id": 6, "name": "Tarjeta Gráfica", "description": "Unidades de procesamiento gráfico (GPU)" },
  { "id": 7, "name": "Fuente de Poder", "description": "Fuentes de alimentación para computadoras" },
  { "id": 8, "name": "Gabinete", "description": "Cajas y gabinetes para ensamblar computadoras" },
  { "id": 9, "name": "Periférico", "description": "Teclados, ratones y otros dispositivos externos" }
]


// Definición de columnas
const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Nombre', accessor: 'name' },
  { Header: 'Descripción', accessor: 'description' },
  { Header: 'Acciones', accessor: 'actions', Cell: ({ row }) => (
    <>
      <Button variant="warning" size="sm" className="me-2">Editar</Button>
      <Button variant="danger" size="sm">Eliminar</Button>
    </>
  )}
];

const CategoriesTable = () => {
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
      <h2 className="text-center mb-4">Gestión de Categorías</h2>
      <InputGroup className="mb-3">
        <FormControl
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="Buscar categorías"
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

export default CategoriesTable;
