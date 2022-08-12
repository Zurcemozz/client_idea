import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StudentSearch = () => {
  const [search, setSearch] = useState('')

  const handleSearch = async () => {}

  return (
    <Stack direction="column" justifyContent="center" alignItems="baseline">
      <Typography fontWeight={700} sx={{ textTransform: 'uppercase' }}>
        Search Students
      </Typography>
      <Box position="relative">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Student, Student Number..."
          type="text"
        />
        <Button
          variant="contained"
          sx={{
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            height: '56px',
            position: 'absolute',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default StudentSearch
