import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Section({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box>{children}</Box>
    </Box>
  )
}
