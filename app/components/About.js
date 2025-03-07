'use client';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

export default function About() {
  return (
    <Box
      sx={{
        p: 5,
        textAlign: 'center',
        background: '#040f13',
        color: 'white',
      }}
    >
      <Typography variant='h4' fontWeight='bold' gutterBottom>
        About <span style={{ color: '#00C6FF' }}>Me</span>
      </Typography>
      <Typography variant='body1' sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
        I am ethical hackers and penetration testers dedicated to securing web
        applications from cyber threats. My expertise spans **network security,
        web security, and reverse engineering**, ensuring that businesses stay
        protected against the latest cyber attacks.
      </Typography>

      {/* Features */}
      <Grid container spacing={3} justifyContent='center'>
        {[
          {
            title: 'Advanced Security',
            desc: 'Cutting-edge penetration testing and ethical hacking.',
          },
          {
            title: 'Threat Detection',
            desc: 'Proactively identify vulnerabilities before attackers do.',
          },
          {
            title: 'Client Trust',
            desc: 'Trusted by enterprises to secure digital assets.',
          },
        ].map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                background: '#121212',
                color: 'white',
                textAlign: 'center',
                p: 2,
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
                },
              }}
            >
              <CardContent>
                <SecurityIcon sx={{ fontSize: 40, color: '#00C6FF', mb: 1 }} />
                <Typography variant='h6' fontWeight='bold'>
                  {feature.title}
                </Typography>
                <Typography variant='body2'>{feature.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
