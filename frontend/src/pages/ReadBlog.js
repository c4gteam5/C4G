// ~~~ API Libraries ~~~ // 
import axios from "axios";

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
import Header from '../components/utils/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import Sidebar from '../components/Sidebar';
import Footer from '../components/utils/Footer';

// ~~~ Static Assets ~~~ //
import siteInfo1 from '../static/media/site-info/site-info1.md';
import siteInfo2 from '../static/media/site-info/site-info2.md';
import siteInfo3 from '../static/media/site-info/site-info3.md';

import logo from '../static/media/pictures/CyientP5Logo.png';

const getPostsURL = "http://localhost:8000/api/blog/getall";
// const baseURL = "https://c4g-backend-2.onrender.com/api/blog/getall";

// function grabblogPosts() {
// 	const res = async()
// }

// ~~~ Capture Markdown Information to JSX ~~~ //
const SiteInformation = (): JSX.Element => {
	const [siteText1, setSiteText1] = useState('')
	const [siteText2, setSiteText2] = useState('')
	const [siteText3, setSiteText3] = useState('')
	
	useEffect(() => {
		fetch(siteInfo1).then(res => res.text()).then(text => setSiteText1(text))
	})
	
	useEffect(() => {
		fetch(siteInfo2).then(res => res.text()).then(text => setSiteText2(text))
	})

	// useEffect(() => {
	// 	fetch('http://localhost:8000/api/blog/getall').then(res => res.text()).then(text => setSiteText3(text))
	// })


	// const [apiCall, setApiCall] = React.useState(null);
	// React.useEffect(() => {
	// 	axios.get(getPostsURL).then((response) => {

	// 			console.log(response.data.posts[0]._id)
	// 			console.log(response.data.posts[0].title)
	// 			console.log(response.data.posts[0].content)
	// 			// console.log(response.data)
	// 		});
	// 	}, 
	// []);

	useEffect(() => {
		fetch(getPostsURL).then(response => {
			console.log(response.data.posts[0]._id)
			console.log(response.data.posts[0].title)
			console.log(response.data.posts[0].content)
		})
	})

	return (
		<Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}}>
			<Divider />
			<ReactMarkdown children={siteText3} />
		</Grid>
	)
}

const sidebar = {
	title: 'About',
	description: 'Cyient Design Led Manufacturing (DLM) strives to give back to society through Cyient Foundation with a focus on local communities through a series of Corporate Social Responsibility (CSR) initiatives on well-being, education, sustainable development, and the environment.',
	archives: [
		{title: 'Some News article for Feb. 2023', url: '#'},
	],
	social: [
		{name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/c4gteam5/C4G'},
		{name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/Cyient'},
		{name: 'Facebook', icon: FacebookIcon, url: 'https://www.facebook.com/Cyient/'},
	],
};

const sections = [
	{title: 'Parent Organization', url: 'https://www.cyient.com/'}
];

const mainFeaturedPost = {
	title: 'Volunteer Sign Up!',
	description: "This is a test holder for a featured post for volunteers to sign up for",
	image: logo,
	imageText: 'main image description',
	linkText: 'Continue reading…',
};

const theme = createTheme();

export default function ReadBlog() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="Cyient Foundation - P5" sections={sections} />
				<main>
					{/*Featured posts and other posts here*/}
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<SiteInformation />
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