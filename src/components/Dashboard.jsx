import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import DepartmentInfo from './DepartmentInfo'
import GraphEnrollment from './GraphEnrollment'
import RecentEnlist from './RecentEnlist'

const Dashboard = () => {
  return (
    <Box dsiplay="flex" flex={7} pt={5}>
      <Stack mx={1} direction="column" spacing={2}>
        <Box sx={{ boxShadow: 3 }} width="100%">
          <DepartmentInfo />
        </Box>
        <Grid sx={{ boxShadow: 3 }} width="100%" height="100%" container p={4}>
          <Grid item xs={8}>
            <GraphEnrollment />
          </Grid>
          <Grid item xs={4}>
            <RecentEnlist />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}

export default Dashboard
