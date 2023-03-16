// ~~~ API Libraries ~~~ // 
import axios from "axios";

// ~~~ React Libraries ~~~ //
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// ~~~ Pages ~~~ //
import './index.css';
import Site from './components/Site';
import AdminSignIn from "./pages/AdminSignIn";
import VolunteerSignUp from "./pages/VolunteerSignUp";
import ManagementHome from "./pages/ManagementHome";
import PostState from "./context/post/postState";

//const baseURL = "http://localhost:8000/api/healthcheck";
const baseURL = "/api/healthcheck";

function App() {
	
	const [apiCall, setApiCall] = React.useState(null);
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
				console.log(response.data)
				setApiCall(response.data);
			});
		}, 
	[]);

	// ~~~ Handles the routes for page navigation ~~~ //
	if (apiCall) return (
		<PostState>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Site />} />
						<Route path="admin-sign-in" element={<AdminSignIn />} />
						<Route path="volunteer-sign-up" element={<VolunteerSignUp />} />
						<Route path="management-home" element={<ManagementHome />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</PostState>
	);
}

export default App;
