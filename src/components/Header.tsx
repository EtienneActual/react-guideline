import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@contexts/ThemeContext';
import { useState } from 'react';
import { LoginModal } from '@components/LoginModal';
import { useUserStore } from '@stores/user.store';

export const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  //
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useUserStore();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Guidelines
          </Typography>
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
