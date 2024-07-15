import React from "react";
import { Table, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useSortBy,
} from "react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const OrderTable = () => {
  // Datos de ejemplo para las órdenes
  const data = React.useMemo(
    () => [
      {
        orderId: 1,
        customer: "John Doe",
        product: "Laptop XYZ",
        amount: 1200,
        status: "Pendiente",
      },
      {
        orderId: 2,
        customer: "Jane Smith",
        product: "Desktop ABC",
        amount: 800,
        status: "Aprobada",
      },
      {
        orderId: 3,
        customer: "Mike Johnson",
        product: 'Monitor 24"',
        amount: 300,
        status: "Enviada",
      },
      {
        orderId: 4,
        customer: "Emily Brown",
        product: "Keyboard",
        amount: 50,
        status: "Entregada",
      },
      {
        orderId: 5,
        customer: "Chris Lee",
        product: "Mouse",
        amount: 30,
        status: "Devuelta",
      },
    ],
    []
  );

  // Columnas definidas con sus nombres y accesores
  const columns = React.useMemo(
    () => [
      { Header: "ID Orden", accessor: "orderId" },
      { Header: "Cliente", accessor: "customer" },
      { Header: "Producto", accessor: "product" },
      { Header: "Monto ($)", accessor: "amount" },
      { Header: "Estado", accessor: "status" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
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

  const { pageIndex, globalFilter } = state;

  const handleFilterChange = (e) => {
    const value = e.target.value || "";
    setGlobalFilter(value);
  };

  return (
    <div className="p-3 bg-light">
      <h2 className="text-center mb-4">Órdenes de Compra</h2>
      <Form.Group className="mb-3">
        <InputGroup>
          <FormControl
            type="text"
            value={globalFilter || ""}
            onChange={handleFilterChange}
            placeholder="Buscar..."
          />
        </InputGroup>
      </Form.Group>

      <Table striped bordered hover {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="table-header"
                >
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
                  <td {...cell.getCellProps()} className="table-cell">
                    {cell.render("Cell")}
                  </td>
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
      <span className="align-self-center">
        Página{" "}
        <strong>
          {pageIndex + 1} de {pageOptions.length}
        </strong>
      </span>
    </div>
  );
};

export default OrderTable;
