import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import Site from './Site';
import AdminSignIn from "./pages/AdminSignIn";
import VolunteerSignIn from "./pages/VolunteerSignIn";
import VolunteerSignUp from "./pages/VolunteerSignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Site />} />
          <Route path="admin-sign-in" element={<VolunteerSignIn />} />
          <Route path="volunteer-sign-in" element={<VolunteerSignIn />} />
          <Route path="volunteer-sign-up" element={<VolunteerSignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);