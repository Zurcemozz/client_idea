import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import TableSemester from './TableSemester'

const StudentCurriculum = ({ title }) => {
  return (
    <Box width="95%">
      <Stack direction="column" spacing={1}>
        <Typography
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
          variant="h5"
          fontWeight={700}
        >
          {title}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
          mr="20px"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <TableSemester />
          <TableSemester />
        </Stack>
      </Stack>
    </Box>
  )
}

export default StudentCurriculum
