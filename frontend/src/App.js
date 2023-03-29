// ~~~ API Libraries ~~~ // 
import axios from "axios";

// ~~~ React Libraries ~~~ //
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// ~~~ Pages ~~~ //
import './index.css';
import Site from './components/Site';
import AdminSignIn from "./pages/AdminSignIn";
import VolunteerSignUp from "./pages/VolunteerSignUp";
import ManagementHome from "./pages/ManagementHome";
import PostManagement from "./pages/PostManagement";
import ReadBlog from "./pages/ReadBlog";
import Archive from "./pages/Archive";
import PostState from "./context/post/postState";
import VolunteerManagement from "./pages/VolunteerManagement";
import VolunteerState from "./context/volunteer/volunteerState";
import { AuthContextProvider } from "./context/auth/authContext";
import { useAuthContext } from "./hooks/useAuthContext";

// const baseURL = "http://localhost:8000/api/healthcheck";
const baseURL = "https://c4g-backend-2.onrender.com/api/healthcheck";

function App() {

	const {user} = useAuthContext
	
	const [apiCall, setApiCall] = React.useState(null);
	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
				setApiCall(response.data);
			});
		}, 
	[]);

	// ~~~ Handles the routes for page navigation ~~~ //
	if (apiCall) return (
		<AuthContextProvider>
		<PostState>
			<VolunteerState>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Site />} />
						<Route path="admin-sign-in" element={!user ? <AdminSignIn /> : <Navigate to='management-home'/>} />
						<Route path="volunteer-sign-up" element={<VolunteerSignUp />} />
						<Route path="management-home" element={user ? <ManagementHome /> : <Navigate to='admin-sign-in'/>} />
						<Route path="read-blog-post" element={<ReadBlog />} />
						<Route path="archive" element={<Archive />} />
						<Route path="post-management" element={user ? <PostManagement /> : <Navigate to='admin-sign-in'/>} />
						<Route path="volunteer-management" element={user ? <VolunteerManagement />  : <Navigate to='admin-sign-in'/>} />
					</Route>
				</Routes>
				
			</BrowserRouter>
			</VolunteerState>
			
		</PostState>
		</AuthContextProvider>
	);
}

export default App;
