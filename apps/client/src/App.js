import NavBar from './components/NavBar';
import ToastNotification from './components/ToastNotification';
import Routes from './pages/Routes';
import { useStateContext } from './context/state';

import customTheme from './styles/customTheme';
import { useBodyStyles } from './styles/muiStyles';
import { Paper } from '@mui/material/';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

const App = () => {
  const { darkMode } = useStateContext();
  const classes = useBodyStyles();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme(darkMode)}>
        <Paper className={classes.root} elevation={0}>
          <ToastNotification />
          <NavBar />
          <Routes />
        </Paper>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
