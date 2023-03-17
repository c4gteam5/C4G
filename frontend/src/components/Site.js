// ~~~ React Libraries ~~~ //
import * as React from 'react';
import { useState, useEffect } from 'react'

// ~~~ Markdown Parser Libraries ~~~ //
import ReactMarkdown from 'markdown-to-jsx';

// ~~~ MUI Libraries ~~~ //
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {createTheme, ThemeProvider} from '@mui/material/styles';

// ~~~ Pages ~~~ //
import Header from './utils/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './utils/Footer';
import BuildMainFeaturedPost from '../actions/BuildMainFeaturedPost';
import BuildFeaturedPosts from '../actions/BuildFeaturedPosts';
import BuildFrontSiteInformation from '../actions/BuildFrontSiteInformation';

// ~~~ Static Assets ~~~ //
import siteInfo1 from '../static/media/site-info/site-info1.md';
import siteInfo2 from '../static/media/site-info/site-info2.md';

import logo from '../static/media/pictures/CyientP5Logo.png';

// ~~~ Blog Posts Assets ~~~ //
import GetServerUrl from '../components/utils/GetServerUrl';
const getPostsURL = GetServerUrl + "api/blog/getall";


const sections = [
	{title: 'Parent Organization', url: 'https://www.cyient.com/'}
];

const sidebar = {
	title: 'About',
	description: 'Cyient Design Led Manufacturing (DLM) strives to give back to society through Cyient Foundation with a focus on local communities through a series of Corporate Social Responsibility (CSR) initiatives on well-being, education, sustainable development, and the environment.',
	archives: [
		{title: 'Read all our posts', url: '/archive'},
	],
	social: [
		{name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/c4gteam5/C4G'},
		{name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/Cyient'},
		{name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/Cyient/'},
	],
};

const theme = createTheme();

export default function Blog() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="Cyient Foundation - P5" sections={sections} />
				<main>
					<BuildMainFeaturedPost />
					<BuildFeaturedPosts />
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<BuildFrontSiteInformation />
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
			</Container>
			<Footer title="Cyient Foundation - P5" description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."/>
		</ThemeProvider>
	);
}