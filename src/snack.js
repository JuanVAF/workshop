import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>Home</Button>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>Eventos</Button>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
        Conferências
      </Button>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
       Palestras
      </Button>
      <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Simpósios</Button>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Workshops</Button>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>Login</Button>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>logout</Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
}
