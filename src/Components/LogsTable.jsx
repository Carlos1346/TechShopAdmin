import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';

function LogsTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Nombre',
        accessor: 'name',
      },
      {
        Header: 'Edad',
        accessor: 'age',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { id: 1, name: 'Juan', age: 28 },
      { id: 2, name: 'Ana', age: 22 },
      { id: 3, name: 'Luis', age: 35 },
      { id: 4, name: 'Maria', age: 30 },
      { id: 5, name: 'Carlos', age: 40 },
      { id: 6, name: 'Laura', age: 25 },
      { id: 7, name: 'Pedro', age: 45 },
      { id: 8, name: 'Sofia', age: 20 },
      { id: 9, name: 'Miguel', age: 38 },
      { id: 10, name: 'Julia', age: 27 },
      // Agrega más datos según necesites
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    pageOptions
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

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
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
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
          Página{' '}
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
    </>
  );
}

export default LogsTable;
