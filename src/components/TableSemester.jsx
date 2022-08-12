import {
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material'
import React from 'react'
import { firstSemYear } from '../DataTableSource'

const columns = [
  { field: 'status', headerName: 'status', width: 20 },
  { field: 'id', headerName: 'student ID', width: 50 },
  { field: 'code', headerName: 'Code', width: 50 },
  { field: 'subject', headerName: 'subject', width: 50 },
  { field: 'lec', headerName: 'LEC', width: 50 },
  { field: 'lab', headerName: 'LAB', width: 50 },
  { field: 'preReq', headerName: 'Pre-Req', width: 50 },
  { field: 'grade', headerName: 'Grade', width: 50 },
  { field: 'action', headerName: 'Action', width: 50 },
]

const TableSemester = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell align="left" key={col.field}>
                  {col.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {firstSemYear.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.code}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.lec}</TableCell>
                <TableCell>{row.lab}</TableCell>
                <TableCell>{row.preReq}</TableCell>
                <TableCell>
                  <TextField type="number" sx={{ width: '60px' }} />
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: 'pink' }}>
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TableSemester
