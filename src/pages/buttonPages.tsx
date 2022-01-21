import React from 'react';
import { Button } from '../components/index';
import Visibility from '@mui/icons-material/Visibility';
import { offerLabel } from '../constants/svgConstants';
import Send from '@mui/icons-material/Send';

const ButtonDashboard = () => {
  return (
    <>
      <h1>Using Color</h1>

      <Button
        label="inherit"
        color="inherit"
        onClick={() => alert('inherit')}
      />
      <Button
        label="primary"
        color="primary"
        onClick={() => alert('primary')}
      />
      <Button
        label="secondary"
        color="secondary"
        onClick={() => alert('secondary')}
      />
      <Button
        label="success"
        color="success"
        onClick={() => alert('success')}
      />
      <Button label="error" color="error" onClick={() => alert('error')} />
      <Button label="info" color="info" onClick={() => alert('info')} />
      <Button
        label="warning"
        color="warning"
        onClick={() => alert('warning')}
      />
      <br></br>
      <br></br>
      <h1>Variant outlined</h1>
      <Button
        label="inherit"
        color="inherit"
        variant="outlined"
        onClick={() => alert('inherit')}
      />
      <Button
        label="primary"
        color="primary"
        variant="outlined"
        onClick={() => alert('primary')}
      />
      <Button
        label="secondary"
        color="secondary"
        variant="outlined"
        onClick={() => alert('secondary')}
      />
      <Button
        label="success"
        color="success"
        variant="outlined"
        onClick={() => alert('success')}
      />
      <Button
        label="error"
        color="error"
        variant="outlined"
        onClick={() => alert('error')}
      />
      <Button
        label="info"
        color="info"
        variant="outlined"
        onClick={() => alert('info')}
      />
      <Button
        label="warning"
        color="warning"
        variant="outlined"
        onClick={() => alert('warning')}
      />
      <br></br>
      <br></br>
      <h1>Append Icons</h1>
      <Button
        label="inherit"
        color="inherit"
        variant="text"
        onClick={() => alert('inherit')}
      />
      <Button
        label="primary"
        color="primary"
        variant="text"
        onClick={() => alert('primary')}
      />
      <Button
        label="secondary"
        color="secondary"
        variant="text"
        onClick={() => alert('secondary')}
      />
      <Button
        label="success"
        color="success"
        variant="text"
        onClick={() => alert('success')}
      />
      <Button
        label="error"
        color="error"
        variant="text"
        onClick={() => alert('error')}
      />
      <Button
        label="info"
        color="info"
        variant="text"
        onClick={() => alert('info')}
      />
      <Button
        label="warning"
        color="warning"
        variant="text"
        onClick={() => alert('warning')}
      />
      <br></br>
      <br></br>

      <h1>Prepend Icon</h1>
      <Button
        label="inherit"
        color="inherit"
        // startIcon={<Visibility/>}
        withStartSvg={offerLabel}
        withEndSvg={offerLabel}
        onClick={() => alert('inherit')}
      />
      <Button
        label="primary"
        color="primary"
        startIcon={<Visibility />}
        onClick={() => alert('primary')}
      />
      <Button
        label="secondary"
        color="secondary"
        startIcon={<Visibility />}
        onClick={() => alert('secondary')}
      />
      <Button
        label="success"
        color="success"
        startIcon={<Visibility />}
        onClick={() => alert('success')}
      />
      <Button
        label="error"
        color="error"
        startIcon={<Visibility />}
        onClick={() => alert('error')}
      />
      <Button
        label="info"
        color="info"
        startIcon={<Visibility />}
        onClick={() => alert('info')}
      />
      <Button
        label="warning"
        color="warning"
        startIcon={<Visibility />}
        onClick={() => alert('warning')}
      />
      <br></br>
      <br></br>

      <h1>Append Icon</h1>
      <Button
        label="inherit"
        color="inherit"
        endIcon={<Send />}
        onClick={() => alert('inherit')}
      />
      <Button
        label="primary"
        color="primary"
        endIcon={<Send />}
        onClick={() => alert('primary')}
      />
      <Button
        label="secondary"
        color="secondary"
        endIcon={<Send />}
        onClick={() => alert('secondary')}
      />
      <Button
        label="success"
        color="success"
        endIcon={<Send />}
        onClick={() => alert('success')}
      />
      <Button
        label="error"
        color="error"
        endIcon={<Send />}
        onClick={() => alert('error')}
      />
      <Button
        label="info"
        color="info"
        endIcon={<Send />}
        onClick={() => alert('info')}
      />
      <Button
        label="warning"
        color="warning"
        endIcon={<Send />}
        onClick={() => alert('warning')}
      />
      <br></br>
      <br></br>

      <h1>With Loader</h1>
      <Button
        label="inherit"
        color="inherit"
        isLoading
        onClick={() => alert('inherit')}
      />
      <Button
        label="primary"
        color="primary"
        isLoading
        onClick={() => alert('primary')}
      />
      <Button
        label="secondary"
        color="secondary"
        isLoading
        onClick={() => alert('secondary')}
      />
      <Button
        label="success"
        color="success"
        isLoading
        onClick={() => alert('success')}
      />
      <Button
        label="error"
        color="error"
        isLoading
        onClick={() => alert('error')}
      />
      <Button
        label="info"
        color="info"
        isLoading
        onClick={() => alert('info')}
      />
      <Button
        label="warning"
        color="warning"
        endIcon={<Send />}
        onClick={() => alert('warning')}
      />
    </>
  );
};

export default ButtonDashboard;
