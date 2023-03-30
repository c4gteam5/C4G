import axios from "axios";
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

// For all our front end learning things (ie im only using their stuff)
// https://mui.com/material-ui/getting-started/templates/

const baseURL = "http://localhost:8000/api/healthcheck";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [apiCall, setApiCall] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      
      setApiCall(response.data);
    });
  }, []);

  if (!apiCall) return <div>
  <p>No data to return. API server is off</p>
  </div>;

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
        </Typography>

        <div>
        <h1>{apiCall.message}</h1>
          <p>The current date and time is: {apiCall.datetime}</p>
        </div>

        <ProTip />

        <Copyright />
      </Box>
    </Container>

    
  );
}

// export default App;
