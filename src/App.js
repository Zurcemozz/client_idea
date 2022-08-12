import MenuIcon from '@mui/icons-material/Menu'
import { Box, Stack } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard, Sidebar } from './components'
import { Home, ImportStudent, ViewStudent } from './pages'
import StudentTable from './pages/StudentTable'

import { useStateContext } from './contextApi/ContextProvide'

function App() {
  const { activeMenu, setActiveMenu } = useStateContext()

  return (
    <Box>
      <BrowserRouter>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Box>
            {activeMenu ? (
              <MenuIcon
                sx={{ pl: '10px', pt: '20px', cursor: 'pointer' }}
                onClick={(e) => setActiveMenu(!activeMenu)}
              />
            ) : (
              <Sidebar />
            )}
          </Box>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/studentList" element={<StudentTable />} />
            <Route path="/student/:id" element={<ViewStudent />} />
            <Route path="/importStudent" element={<ImportStudent />} />
          </Routes>
        </Stack>
      </BrowserRouter>
    </Box>
  )
}

export default App
