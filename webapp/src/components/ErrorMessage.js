import { Alert, AlertTitle } from '@mui/material';
import { useAlertStyles } from '../styles/muiStyles';

const AlertMessage = ({ errorMsg, clearErrorMsg }) => {
  const classes = useAlertStyles();

  if (!errorMsg) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Alert severity="error" onClose={clearErrorMsg}>
        <AlertTitle>Error</AlertTitle>
        {errorMsg}
      </Alert>
    </div>
  );
};

export default AlertMessage;
