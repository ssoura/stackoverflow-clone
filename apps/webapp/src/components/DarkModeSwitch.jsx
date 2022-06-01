import { useStateContext } from '../context/state';

import { IconButton } from '@mui/material';
import { useNavStyles } from '../styles/muiStyles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkModeSwitch = () => {
  const { darkMode, toggleDarkMode } = useStateContext();
  const classes = useNavStyles();

  return (
    <IconButton
      color="primary"
      onClick={() => toggleDarkMode()}
      className={classes.iconBtn}
      size="large">
      {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default DarkModeSwitch;
