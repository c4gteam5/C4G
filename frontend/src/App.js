// ~~~ API Libraries ~~~ // 
import axios from "axios";

// ~~~ React Libraries ~~~ //
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// ~~~ Pages ~~~ //
import './index.css';
import Site from './Site';
import AdminSignIn from "./pages/AdminSignIn";
import VolunteerSignUp from "./pages/VolunteerSignUp";

//const baseURL = "http://localhost:8000/api/healthcheck";
const baseURL = "https://c4g-backend-2.onrender.com/api/healthcheck";

function App() {
	
	const [apiCall, setApiCall] = React.useState(null);
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
				console.log(response.data)
				setApiCall(response.data);
			});
		}, 
	[]);

	if (!apiCall) return (
		<div>
			<p>No data to return. API server is off</p>
		</div>
	)

	// ~~~ Handles the routes for page navigation ~~~ //
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Site />} />
					<Route path="admin-sign-in" element={<AdminSignIn />} />
					<Route path="volunteer-sign-up" element={<VolunteerSignUp />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;