import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'
import { itemRows } from '../DataTableSource'

const RecentEnlist = () => {
  return (
    <Paper elevation={3}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        bgcolor="pink"
        height="100%"
      >
        <Typography color="gray" fontWeight={400}>
          Recent Enlisted
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 300 }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Course</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemRows.slice(0, 10).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.studentName}</TableCell>
                  <TableCell>{row.course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Paper>
  )
}

export default RecentEnlist
