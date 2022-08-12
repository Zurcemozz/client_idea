import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

const ImportStudent = () => {
  return (
    <Box flex={7} pt={2}>
      <Box width="250px">
        <Stack direction="column">
          <Typography>Import Student</Typography>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden />
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ImportStudent
