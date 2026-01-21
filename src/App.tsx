import {
  Box,
  Container,
  Typography,
  Paper,
  Link,
  Stack,
  Chip,
} from '@mui/material';
import {
  RestaurantMenu,
  LocalShipping,
  Favorite,
  Email,
  Schedule,
  LocationOn,
} from '@mui/icons-material';

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(46, 125, 50, 0.1)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(46, 125, 50, 0.15)',
        },
      }}
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: 'primary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          color: 'white',
        }}
      >
        {icon}
      </Box>
      <Typography variant="h3" gutterBottom color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
}

export default function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #F5F5F0 0%, #E8F5E9 50%, #F5F5F0 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {/* Logo */}
          <Typography
            sx={{
              fontFamily: "'Caveat', cursive",
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              fontWeight: 700,
              color: 'primary.main',
              mb: 1,
              lineHeight: 1,
            }}
          >
            MadBud.dk
          </Typography>

          <Chip
            label="0% kommission"
            color="primary"
            size="small"
            sx={{ mb: 4, fontWeight: 600 }}
          />

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              color: 'text.primary',
              mb: 2,
              background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Kommer snart!
          </Typography>

          <Typography
            variant="h2"
            sx={{ color: 'text.secondary', mb: 4, fontWeight: 500 }}
          >
            Mad fra lokale restauranter i Sønderborg
          </Typography>

          {/* Launch Date */}
          <Paper
            elevation={0}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 4,
              py: 2,
              backgroundColor: 'primary.main',
              color: 'white',
              borderRadius: 50,
              mb: 4,
            }}
          >
            <Schedule />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Forventet lancering: Midt februar 2025
            </Typography>
          </Paper>

          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', mb: 6 }}
          >
            Vi arbejder hårdt på at skabe den bedste madleveringsoplevelse for dig og
            de lokale restauranter i Sønderborg. Uden kommission til restauranterne
            - så pengene går til dem der laver maden.
          </Typography>
        </Box>

        {/* Features */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 6,
          }}
        >
          <FeatureCard
            icon={<RestaurantMenu sx={{ fontSize: 32 }} />}
            title="Lokale favoritter"
            description="Udforsk de bedste restauranter i Sønderborg samlet ét sted"
          />
          <FeatureCard
            icon={<LocalShipping sx={{ fontSize: 32 }} />}
            title="Hurtig levering"
            description="Få din mad leveret hurtigt og varmt direkte til døren"
          />
          <FeatureCard
            icon={<Favorite sx={{ fontSize: 32 }} />}
            title="Støt lokalt"
            description="0% kommission betyder mere til de lokale restauranter"
          />
        </Box>

        {/* Contact Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(46, 125, 50, 0.15)',
          }}
        >
          <Typography variant="h3" gutterBottom color="text.primary">
            Har du spørgsmål?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Vi vil meget gerne høre fra dig! Skriv til os, hvis du har spørgsmål
            eller er interesseret i at blive partner.
          </Typography>
          <Link
            href="mailto:info@madbud.dk"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <Email />
            info@madbud.dk
          </Link>
        </Paper>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          textAlign: 'center',
          borderTop: '1px solid rgba(46, 125, 50, 0.1)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 1 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">Sønderborg, Danmark</Typography>
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} MadBud.dk - Alle rettigheder forbeholdes
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
