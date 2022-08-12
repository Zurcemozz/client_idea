import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const DepartmentInfo = () => {
  return (
    <Box p={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            textTransform: 'capitalize',
          }}
        >
          Dr. Eddie Boy Dela Cruz
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" color="gray" fontWeight={400}>
            College of Engineering
          </Typography>
          <Box
            component="img"
            src="https://i.ibb.co/swrHgvR/156220123-1074380053045892-1798173957530161103-n.jpg"
            sx={{ borderRadius: '50%', height: '40px' }}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default DepartmentInfo
