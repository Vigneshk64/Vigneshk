import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // ✅ Import this

const pages = ['Home', 'About', 'Contact Us'];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNotif, setAnchorElNotif] = React.useState(null);
  const navigate = useNavigate(); // ✅ Initialize

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleOpenNotifMenu = (event) => setAnchorElNotif(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);
  const handleCloseNotifMenu = () => setAnchorElNotif(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1F1F1F', width: '100%' }}>
      <Container sx={{ maxWidth: '100%' }}>
        <Toolbar disableGutters>
          {/* Logo */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#FFD700' }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              '&:hover': { color: '#FFD700' },
            }}
          >
            RECIPY
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(' ', '')}`}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  transition: '0.3s',
                  '&:hover': { color: '#FFD700', backgroundColor: 'rgba(255, 255, 255, 0.1)' },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Notification Icon */}
          <Tooltip title="Notifications">
            <IconButton
onClick={() => navigate("/notifications")}
sx={{
                color: 'white',
                mr: 2,
                '&:hover': { color: '#FFD700' },
              }}
            >
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorElNotif}
            open={Boolean(anchorElNotif)}
            onClose={handleCloseNotifMenu}
            sx={{
              mt: '45px',
              '& .MuiPaper-root': {
                backgroundColor: '#282828',
                color: 'white',
                borderRadius: '10px',
              },
            }}
          >
            <MenuItem onClick={handleCloseNotifMenu}>You have a message</MenuItem>
          </Menu>

          {/* User Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  transition: 'box-shadow 0.3s',
                  '&:hover': { boxShadow: '0px 0px 10px rgba(255, 215, 0, 0.8)' },
                }}
              >
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                mt: '45px',
                '& .MuiPaper-root': {
                  backgroundColor: '#282828',
                  color: 'white',
                  borderRadius: '10px',
                },
              }}
            >
              <MenuItem component={Link} to="/sign" onClick={handleCloseUserMenu} sx={{ '&:hover': { backgroundColor: '#444' } }}>
                Registration
              </MenuItem>
              <MenuItem component={Link} to="/logout" onClick={handleCloseUserMenu} sx={{ '&:hover': { backgroundColor: '#444' } }}>
                Logout
              </MenuItem>
              <MenuItem component={Link} to="/" onClick={handleCloseUserMenu} sx={{ '&:hover': { backgroundColor: '#444' } }}>
                Login
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
