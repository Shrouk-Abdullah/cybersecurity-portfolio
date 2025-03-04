// 'use client';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import ShieldIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';

const skills = [
  {
    title: 'Penetration Testing',
    description: 'Ethical hacking to identify security flaws.',
    icon: <BugReportIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Network Security',
    description: 'Defending networks from cyber attacks.',
    icon: <ShieldIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Web Security',
    description: 'Protecting web applications from vulnerabilities.',
    icon: <WebIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Reverse Engineering',
    description: 'Analyzing software for security flaws.',
    icon: <TerminalIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Web Development',
    description: 'Building secure and modern web apps.',
    icon: <CodeIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
  {
    title: 'Database Security',
    description: 'Securing sensitive data storage.',
    icon: <StorageIcon sx={{ fontSize: 50, color: '#00C6FF' }} />,
  },
];

export default function Skills() {
  return (
    <Box
      sx={{ p: 5, textAlign: 'center', background: '#121212', color: 'white' }}
    >
      <Typography variant='h4' fontWeight='bold' gutterBottom>
        My <span style={{ color: '#00C6FF' }}>Skills</span>
      </Typography>
      <Typography variant='body1' sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
        I specialize in cybersecurity and web development, ensuring secure and
        optimized digital solutions.
      </Typography>

      {/* Skills Grid */}
      <Grid container spacing={3} justifyContent='center'>
        {skills.map((skill, index) => (
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
                {skill.icon}
                <Typography variant='h6' fontWeight='bold' sx={{ mt: 2 }}>
                  {skill.title}
                </Typography>
                <Typography variant='body2' sx={{ opacity: 0.8 }}>
                  {skill.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
