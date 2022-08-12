import { Box, Button, Divider, Stack } from '@mui/material'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import StudentCurriculum from '../components/StudentCurriculum'
import StudentInformation from '../components/StudentInformation'
const ViewStudent = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const printRef = React.useRef()
  const handleDownloadPdf = async () => {
    const element = printRef.current
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const imgProperties = pdf.getImageProperties(data)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('print.pdf')
  }
  return (
    <Box flex={7} pt={3}>
      <Button onClick={handlePrint}>Print</Button>
      <Button onClick={handleDownloadPdf}>Download PDF</Button>
      <Stack
        ref={(componentRef, printRef)}
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        direction="column"
        alignItems="center"
      >
        <StudentInformation />
        <StudentCurriculum title="1st Year" />
        <StudentCurriculum title="2nd Year" />
        <StudentCurriculum title="3rd Year" />
        <StudentCurriculum title="4th Year" />
      </Stack>
    </Box>
  )
}

export default ViewStudent
