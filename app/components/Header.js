'use client';
import SecurityIcon from '@mui/icons-material/Security';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Checks if screen is small

  return (
    <Box
      sx={{
        height: { xs: 'auto', sm: '80vh' }, // Adjusts height for smaller screens
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
        color: 'white',
        padding: { xs: 3, sm: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Cybersecurity Background Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "url('/cybersecurity-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <SecurityIcon
          sx={{ fontSize: isMobile ? 70 : 100, color: '#00C6FF', mb: 2 }}
        />

        <Typography
          variant={isMobile ? 'h4' : 'h3'} // Smaller text on mobile
          sx={{
            fontWeight: 'bold',
            textShadow: '0px 0px 10px rgba(0,198,255,0.6)',
          }}
        >
          Secure Your Web Applications
        </Typography>

        <Typography
          variant='h6'
          sx={{
            mt: 2,
            maxWidth: '700px',
            opacity: 0.9,
            fontSize: { xs: '1rem', sm: '1.25rem' }, // Adjust text size for mobile
          }}
        >
          I specialize in ethical hacking and penetration testing to identify
          vulnerabilities and fortify your web applications before attackers do.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack buttons on small screens
            gap: 2, // Adds spacing between buttons
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#00C6FF',
              color: '#0F2027',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#009ACD',
              },
              width: { xs: '100%', sm: 'auto' }, // Full width on mobile
            }}
            startIcon={<ShieldOutlinedIcon />}
          >
            Services
          </Button>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#00C6FF',
              color: '#00C6FF',
              fontWeight: 'bold',
              '&:hover': {
                borderColor: '#009ACD',
                color: '#009ACD',
              },
              width: { xs: '100%', sm: 'auto' }, // Full width on mobile
            }}
            startIcon={<VerifiedUserOutlinedIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
