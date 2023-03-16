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

import {Link as RouterLink } from "react-router-dom";

// ~~~ Pages ~~~ //
// import Header from './utils/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Sidebar from './Sidebar';
// import Footer from './utils/Footer';

import logo from '../static/media/pictures/CyientP5Logo.png';

// ~~~ Blog Posts Assets ~~~ //
import GetServerUrl from '../components/utils/GetServerUrl';
const getPostsURL = GetServerUrl + "blog/getall";
// const baseURL = "https://c4g-backend-2.onrender.com/api/blog/getall";



function BuildMainFeaturedPost () {
	const [blogPosts, blogPostsSwitch] = useState([])
	console.log(getPostsURL)
	var mainFeaturedPost = {
		title: 'Volunteer Sign Up!',
		description: "This is a test holder for a featured post for volunteers to sign up for",
		image: logo,
		imageText: 'main image description',
		linkText: 'Continue reading…',
		id: '0',
	};

	const fetchBlogs = async () => {
		fetch(getPostsURL)
			.then((res) => res.json())
			.then((data) => {
			console.log(data.results);
			blogPostsSwitch(data.posts);
		})
	};

	useEffect(() => {
		fetchBlogs();
	}, [])

	
	var length = blogPosts.length;

	if (length > 0) {
		console.log(blogPosts.length)
		console.log(blogPosts)
		mainFeaturedPost = {
			title: blogPosts[length - 1].title,
			description: blogPosts[length - 1].content,
			image: logo,
			imageText: 'logo image',
			linkText: 'Continue reading…',
			id: blogPosts[length - 1]._id,
		};
	}

	return (
		<MainFeaturedPost post={mainFeaturedPost} />
	)
}

export default BuildMainFeaturedPost;

			// <Button component={RouterLink} to="/read-blog-post" size="small">Read Blog Post</Button>
