import { Box, Stack } from '@mui/material'
import React from 'react'
import StudentList from '../components/StudentList'
import StudentSearch from '../components/StudentSearch'

const StudentTable = () => {
  return (
    <Box pt={4} flex={7}>
      <Box px={2}>
        <Stack direction="column" justifyContent="center" spacing={2}>
          <StudentSearch />
          <StudentList />
        </Stack>
      </Box>
    </Box>
  )
}

export default StudentTable
