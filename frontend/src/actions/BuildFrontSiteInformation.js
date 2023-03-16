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
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import {Link as RouterLink } from "react-router-dom";

// ~~~ Pages ~~~ //
import FeaturedPost from '../components/FeaturedPost';

import logo from '../static/media/pictures/CyientP5Logo.png';
import image1 from '../static/media/pictures/CyientRobot1.png';
import image2 from '../static/media/pictures/CyientRobot2.png';

// ~~~ Blog Posts Assets ~~~ //
import GetServerUrl from '../components/utils/GetServerUrl';
const getPostsURL = GetServerUrl + "blog/getall";


function BuildFrontSiteInformation() {
	var siteText1 = "# Big ol title\n\nThis is where your post could be read"
	var siteText2 = "# Big ol title\n\nThis is where your post could be read"
	let blogImage1 = ''
	let blogImage2 = ''
	const [blogPosts, blogPostsSwitch] = useState([])

	const fetchBlogs = async () => {
		fetch(getPostsURL)
			.then((res) => res.json())
			.then((data) => {
			// console.log(data.results);
			blogPostsSwitch(data.posts);
		})
	};

	useEffect(() => {
		fetchBlogs();
	}, [])


	var length = blogPosts.length;
	let targetURL1 = "/read-blog-post" + "?id="
	let targetURL2 = "/read-blog-post" + "?id="

	if (length > 4) {

		blogImage1 = blogPosts[length - 4].linkToPicture
		blogImage2 = blogPosts[length - 5].linkToPicture
		if (blogImage1 === '' || blogImage1 === undefined) {
			blogImage1 = image1
			// console.log('image variable is undefined or null');
		}
		if (blogImage2 === '' || blogImage2 === undefined) {
			blogImage2 = image2
			// console.log('image variable is undefined or null');
		}

		siteText1 = "# " + blogPosts[length - 4].title + "\n\n" + blogPosts[length - 4].content
		siteText2 = "# " + blogPosts[length - 5].title + "\n\n" + blogPosts[length - 5].content
		if (siteText1.length > 269) {
			siteText1 = siteText1.susbtring(0, 269)
			siteText1 = siteText1 + "..."
		}
		if (siteText2.length > 269) {
			siteText2 = siteText2.susbtring(0, 269)
			siteText2 = siteText2 + "..."
		}

		targetURL1 = targetURL1 + blogPosts[length - 4]._id
		targetURL2 = targetURL2 + blogPosts[length - 5]._id
	}
	else if (length > 3 && length < 5) {

		blogImage1 = blogPosts[length - 4].linkToPicture
		if (blogImage1 === '' || blogImage1 === undefined) {
			blogImage1 = image1
			// console.log('image variable is undefined or null');
		}

		siteText1 = "# " + blogPosts[length - 4].title + "\n\n" + blogPosts[length - 4].content
		if (siteText1.length > 269) {
			siteText1 = siteText1.susbtring(0, 269)
			siteText1 = siteText1 + "..."
		}

		targetURL1 = targetURL1 + blogPosts[length - 4]._id
	}

	return (
		<Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}}>
			<Divider />
			<ReactMarkdown children={siteText1} />
			<Link variant="subtitle1" href={targetURL1}>
				Continue Reading...
			</Link>
			<Divider />
			<ReactMarkdown children={siteText2} />
			<Link variant="subtitle1" href={targetURL2}>
				Continue Reading...
			</Link>
		</Grid>
	)
}

export default BuildFrontSiteInformation;