import { Box, Button, Stack } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { itemRows } from '../DataTableSource.js'
const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'studentName', label: 'Student Name', minWidth: 100 },
  {
    id: 'course',
    label: 'Coruse',
    minWidth: 170,
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
  },
]

const StudentList = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  return (
    <Box>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {itemRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.studentName}</TableCell>
                      <TableCell>{row.course}</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={2}>
                          <Link to={`/student/${row.id}`}>
                            <Button variant="contained">View</Button>
                          </Link>
                          <Button color="error" variant="contained">
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={itemRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export default StudentList
