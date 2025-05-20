import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
function LoadingBar({ loading }) {
  return (
    loading ? (
      <Stack sx={{ color: 'grey.500', position:"absolute" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
    ) : null
  );
}

export default LoadingBar;
