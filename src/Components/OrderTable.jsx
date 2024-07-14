import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';

function OrderTable({ columns, data }) {
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

export default OrderTable;
