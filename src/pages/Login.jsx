import { Box, Button, Grid, Paper, Stack, TextField } from '@mui/material'

import React from 'react'

const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ width: 500, height: 300, p: 4 }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={20}
        >
          <Box>Top View</Box>
          <form action="">
            <Stack display="flex" spacing={2} direction="column">
              <Grid container direction="row" spacing={2}>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                  />
                </Grid>
              </Grid>
              <Button variant="contained">Login</Button>
            </Stack>
          </form>
        </Stack>
      </Paper>
    </Box>
  )
}

export default Login
