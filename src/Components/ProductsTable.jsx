// src/Components/ProductsTable.jsx
import React, { useState } from "react";
import { Table, Button, InputGroup, FormControl } from "react-bootstrap";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { Link } from "react-router-dom";

// Datos ficticios de ejemplo
const data = [
  { "id": 1, "name": "Computadora Armada Gamer", "category": "Computadora Armada", "price": 1500 },
  { "id": 2, "name": "Procesador Intel Core i9", "category": "Procesador", "price": 500 },
  { "id": 3, "name": "Tarjeta Madre ASUS ROG", "category": "Tarjeta Madre", "price": 300 },
  { "id": 4, "name": "Memoria RAM Corsair 16GB", "category": "Memoria RAM", "price": 150 },
  { "id": 5, "name": "Disco Duro SSD 1TB", "category": "Disco Duro", "price": 200 },
  { "id": 6, "name": "Tarjeta Gráfica NVIDIA RTX 3080", "category": "Tarjeta Gráfica", "price": 800 },
  { "id": 7, "name": "Fuente de Poder EVGA 750W", "category": "Fuente de Poder", "price": 100 },
  { "id": 8, "name": "Gabinete NZXT H510", "category": "Gabinete", "price": 120 },
  { "id": 9, "name": "Teclado Mecánico HyperX", "category": "Periférico", "price": 90 },
  { "id": 10, "name": "Mouse Gamer Logitech G502", "category": "Periférico", "price": 70 }
]


// Definición de columnas
const columns = [
  { Header: "ID", accessor: "id" },
  { Header: "Nombre", accessor: "name" },
  { Header: "Categoría", accessor: "category" },
  { Header: "Precio", accessor: "price" },
  {
    Header: "Acciones",
    accessor: "actions",
    Cell: ({ row }) => (
      <>
        <Button
          as={Link}
          to="/Dashboard/Altas/ProductForm"
          variant="warning"
          size="sm"
          className="me-2"
        >
          Editar
        </Button>
        <Button variant="danger" size="sm">
          Eliminar
        </Button>
      </>
    ),
  },
];

const ProductsTable = () => {
  const [filterInput, setFilterInput] = useState("");

  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setGlobalFilter(value);
    setFilterInput(value);
  };

  return (
    <div className="p-3 bg-light">
      <h2 className="text-center mb-4">Gestión de Productos</h2>
      <InputGroup className="mb-3">
        <FormControl
          value={filterInput}
          onChange={handleFilterChange}
          placeholder="Buscar productos"
        />
      </InputGroup>
      <Table striped bordered hover {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown />
                      ) : (
                        <FaSortUp />
                      )
                    ) : (
                      <FaSort />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
      <p></p>
      <Button
        as={Link}
        to="/Dashboard/Altas/ProductForm"
        variant="primary"
        type="submit"
      >
        Agregar Producto
      </Button>
    </div>
  );
};

export default ProductsTable;
