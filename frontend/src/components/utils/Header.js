// ~~~ React Libraries ~~~ //
import * as React from 'react';
import PropTypes from 'prop-types';

// ~~~ MUI Libraries ~~~ //
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import {Link as RouterLink } from "react-router-dom";

function Header(props) {
  const {sections, title} = props;
  return (
    <React.Fragment>
		<Toolbar sx={{ borderBottom: 1, borderColor: 'divider'}}>
			<Button component={RouterLink} to="/volunteer-sign-up" size="small">Subscribe</Button>
			<Button component={RouterLink} to="/read-blog-post" size="small">Read Blog Post</Button>
			<Typography component={RouterLink} to="/" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
				{title}
			</Typography>
			{/*search Icon Here*/}
			<Button component={RouterLink} to="/volunteer-sign-up" variant="outlined" size="small">
				Volunteer Sign Up
			</Button>
			<Button component={RouterLink} to="/admin-sign-in" variant="outlined" size="small">
				Admin Sign In
			</Button>
		</Toolbar>
		<Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-between', overflowX: 'auto' }}>
			{sections.map((section) => (
				<Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} sx={{ p: 1, flexShrink: 0 }}>
					{section.title}
				</Link>
			))}
		</Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf( 
	PropTypes.shape({
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}),).isRequired, 
	title: PropTypes.string.isRequired,
};

export default Header;


{/* Search Icon may be added later
			<IconButton>
				<SearchIcon />
			</IconButton>
*/}