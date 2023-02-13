import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8000/api/healthcheck";

function App() {
  const [apiCall, setApiCall] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setApiCall(response.data);
    });
  }, []);

  if (!apiCall) return <div>
  <p>No data to return. API server is off</p>
  </div>;

  return (
    <div>
      <h1>{apiCall.message}</h1>
      <p>The current date and time is: {apiCall.datetime}</p>
    </div>
  );
}

export default App;
