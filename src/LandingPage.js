import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Home from './components/Home';
import Stats from './components/Stats';
import Game from './components/Game';
import Operation from './components/Operation';
import Footer from './components/Footer';
import getLPTheme from './getLPTheme';

const defaultTheme = createTheme({});

export default function LandingPage() {
  const [mode, setMode] = React.useState('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Home />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Game />
        <Divider />
        <Divider />
        <Stats />
        <Divider />
        <Divider />
        <Operation />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
