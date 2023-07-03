import { makeStyles } from '@material-ui/core/styles';

const theme = {
  spacing: ['0px', '8px', '16px', '24px', '32px']
  // theme.spacing(2); // `${8 * 2}px` = '16px'
}

export const styles = {
  root: {
    '& .MuiInputBase-root': {
      margin: theme.spacing[1],
    },
  },
  paper: {
    padding: theme.spacing[2],
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}