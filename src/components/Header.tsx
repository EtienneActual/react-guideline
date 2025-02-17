import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@/data/contexts/theme.context';
import { useState } from 'react';
import { LoginModal } from '@/components/Modal/LoginModal';
import { useUserStore } from '@/data/stores/user.store';
import { Link } from '@tanstack/react-router';

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  //
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useUserStore();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" color="inherit" sx={{ textTransform: 'none', mr: 3, fontSize: '1.3rem' }}>
            React Guidelines
          </Button>
          <Button component={Link} to="/coins" color="inherit" sx={{ textTransform: 'none' }}>
            Coins (Rest API)
          </Button>
          <Button component={Link} to="/socket" color="inherit" sx={{ textTransform: 'none' }}>
            Chat (Socket.IO)
          </Button>
          <Button component={Link} to="/star-wars" color="inherit" sx={{ textTransform: 'none' }}>
            Star Wars (GraphQL)
          </Button>
          <Button component={Link} to="/form-demo" color="inherit" sx={{ textTransform: 'none' }}>
            Form Demo
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {isAuthenticated ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography>{user?.username}</Typography>
                <Button color="inherit" onClick={logout}>
                  Déconnexion
                </Button>
              </Box>
            ) : (
              <Button color="inherit" onClick={() => setIsLoginModalOpen(true)}>
                Connexion
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <LoginModal open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};
