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
// import MainFeaturedPost from '../components/MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import BuildMainFeaturedPost from '../actions/BuildMainFeaturedPost';
import BuildFeaturedPosts from '../actions/BuildFeaturedPosts';
import Sidebar from '../components/Sidebar';
import Footer from '../components/utils/Footer';

// ~~~ Static Assets ~~~ //
import siteInfo1 from '../static/media/site-info/site-info1.md';
import siteInfo2 from '../static/media/site-info/site-info2.md';
import siteInfo3 from '../static/media/site-info/site-info3.md';

import logo from '../static/media/pictures/CyientP5Logo.webp';

// ~~~ Blog Posts Assets ~~~ //
import GetServerUrl from '../components/utils/GetServerUrl';
const getPostsURL = GetServerUrl + "api/blog/getall";


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

const sections = [
	{title: 'Parent Organization', url: 'https://www.cyient.com/'}
];

const theme = createTheme();

export default function ReadBlog() {
	const queryParameters = new URLSearchParams(window.location.search)
	const url_id = queryParameters.get("id")

	var [blogPosts, blogPostsSwitch] = useState([])
	let blogTitle = ''
	let blogBody = ''
	let blogImage = ''

	const fetchBlogs = async () => {
			fetch(getPostsURL)
				.then((res) => res.json())
				.then((data) => {

				blogPostsSwitch(data.posts)
			})
		};

	useEffect(() => {
		fetchBlogs();
	}, [])

	// console.log("break")
	// console.log(blogPosts)

	for (let i = 0; i < blogPosts.length; i++) {
        if (blogPosts[i]._id == url_id) {
            blogTitle = blogPosts[i].title
			blogBody = blogPosts[i].content
			blogImage = blogPosts[i].linkToPicture	// COMMENT IN FOR 
			// blogImage = logo 	// comment in for stock image
			
		}
	}

    if (blogImage === '' || blogImage === undefined) {
		blogImage = logo
		// console.log('image variable is undefined or null');
	}

    // console.log(blogTitle)
    // console.log(blogBody)
    // console.log(blogImage)
    // console.log(url_id)

    let markdown = ""
    if (url_id === undefined || url_id === '' || url_id === null) {
    	markdown = "# Big ol title\n\nThis is where your post could be read"
    }
    else {
    	markdown = "# " + blogTitle + "\n\n" + blogBody
    }

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="Cyient Foundation - P5" sections={sections} />
				<main>
					{/*Featured posts and other posts here*/}
					<BuildMainFeaturedPost />
					<BuildFeaturedPosts />
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}}>
							<Divider />
							<img
								src={blogImage}
								style={{ maxWidth: "100%" }}
							/>
							<ReactMarkdown children={markdown} />
						</Grid>
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