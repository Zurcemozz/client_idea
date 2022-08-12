import { Box, Stack, TextField } from '@mui/material'
import React from 'react'

const StudentInformation = () => {
  return (
    <Box width="100%">
      <Stack
        direction="row"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Box flex={2}>
          <Stack
            display="flex"
            justifyContent="space-center"
            alignItems="center"
          >
            <Box
              component="img"
              src="https://i.ibb.co/swrHgvR/156220123-1074380053045892-1798173957530161103-n.jpg"
              sx={{ height: '150px', borderRadius: '50%', border: 4 }}
            />
          </Stack>
        </Box>
        <Box flex={8}>
          <Stack direction="row" justifyContent="space-around">
            <Box>
              <Stack direction="column" spacing={1}>
                <TextField
                  id="outlined-read-only-input"
                  label="Name"
                  defaultValue="John Doe"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Course"
                  defaultValue=" Bachelor ins Science in Computer Science"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Gender"
                  defaultValue=" Male"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
              </Stack>
            </Box>
            <Box>
              <Stack direction="column" spacing={1}>
                <TextField
                  id="outlined-read-only-input"
                  label="Student ID"
                  defaultValue="20190012"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Birthday"
                  defaultValue="May 25, 2000"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Nationality"
                  defaultValue="Filipino"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
              </Stack>
            </Box>

            <Box>
              <Stack direction="column" spacing={1}>
                <TextField
                  id="outlined-read-only-input"
                  label="Address"
                  defaultValue="20190012"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                  sx={{ width: 250 }}
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default StudentInformation
