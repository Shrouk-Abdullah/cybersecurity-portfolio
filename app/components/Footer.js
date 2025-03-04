import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{ p: 3, textAlign: 'center', background: '#0A0A0A', color: 'white' }}
    >
      <Typography variant='body2'>
        © 2025 Shrouk. All rights reserved.
      </Typography>
    </Box>
  );
}
