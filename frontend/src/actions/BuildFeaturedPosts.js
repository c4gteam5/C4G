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
// import Header from './utils/Header';
// import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
// import Sidebar from './Sidebar';
// import Footer from './utils/Footer';

import logo from '../static/media/pictures/CyientP5Logo.png';
import image1 from '../static/media/pictures/CyientRobot1.png';
import image2 from '../static/media/pictures/CyientRobot2.png';

// ~~~ Blog Posts Assets ~~~ //
const getPostsURL = "http://localhost:8000/api/blog/getall";
// const baseURL = "https://c4g-backend-2.onrender.com/api/blog/getall";



function BuildFeaturedPosts () {
	const [blogPosts, blogPostsSwitch] = useState([])

	var featuredPosts = [
		{
			title: 'Featured post',
			date: 'Feb 20',
			description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image: 'https://source.unsplash.com/random',
			imageLabel: 'Image Text',
		},
		{
			title: 'Post title',
			date: 'Feb 21',
			description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image: 'https://source.unsplash.com/random',
			imageLabel: 'Image Text',
		},
	];

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

	if (length > 2) {
		console.log(blogPosts.length)
		console.log(blogPosts)

		featuredPosts = [
		{
			title: blogPosts[length - 2].title,
			date: 'Feb 20',
			description: blogPosts[length - 2].content,
			image: image1,
			imageLabel: 'Image Text',
		},
		{
			title: blogPosts[length - 3].title,
			date: 'Feb 21',
			description: blogPosts[length - 3].content,
			image: image2,
			imageLabel: 'Image Text',
		},
	];
	}
	else if (length > 1 && length < 2) {
		featuredPosts = {
			title: blogPosts[length - 2].title,
			date: 'Feb 20',
			description: blogPosts[length - 2].content,
			image: image1,
			imageLabel: 'Image Text',
		};
	}

	return (
		<Grid container spacing={4}>
			{featuredPosts.map((post) => (
			  <FeaturedPost key={post.title} post={post} />
			))}
		</Grid>
	)
}

export default BuildFeaturedPosts;