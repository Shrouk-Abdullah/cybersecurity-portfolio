import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';

const services = [
  {
    title: 'Penetration Testing',
    description: 'Identify and exploit vulnerabilities before hackers do.',
    icon: <BugReportIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Web Security',
    description: 'Protect your web applications against cyber threats.',
    icon: <SecurityIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Web Development',
    description: 'Build secure, high-performance websites and applications.',
    icon: <CodeIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
];

export default function Features() {
  return (
    <Box
      sx={{ p: 5, textAlign: 'center', background: '#121212', color: 'white' }}
    >
      <Typography variant='h4' fontWeight='bold' gutterBottom>
        My <span style={{ color: '#00C6FF' }}>Services</span>
      </Typography>
      <Typography variant='body1' sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
        We provide cutting-edge cybersecurity and web development solutions to
        protect and build secure digital assets.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={3} justifyContent='center'>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: '#1A1A1A',
                color: 'white',
                textAlign: 'center',
                p: 3,
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
                },
              }}
            >
              <CardContent>
                {service.icon}
                <Typography variant='h6' fontWeight='bold' sx={{ mt: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant='body2' sx={{ opacity: 0.8 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
