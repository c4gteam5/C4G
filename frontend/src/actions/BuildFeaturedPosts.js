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
import FeaturedPost from '../components/FeaturedPost';

import logo from '../static/media/pictures/CyientP5Logo.webp';
import image1 from '../static/media/pictures/CyientRobot1.webp';
import image2 from '../static/media/pictures/CyientRobot2.webp';

// ~~~ Blog Posts Assets ~~~ //
import GetServerUrl from '../components/utils/GetServerUrl';
const getPostsURL = GetServerUrl + "api/blog/getall";


function BuildFeaturedPosts () {
	const [blogPosts, blogPostsSwitch] = useState([])

	var featuredPosts = [
		{
			title: 'Featured post',
			date: 'Feb 20',
			description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image: 'https://source.unsplash.com/random',
			imageLabel: 'Image Text',
			id: '0',
		},
		{
			title: 'Post title',
			date: 'Feb 21',
			description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image: 'https://source.unsplash.com/random',
			imageLabel: 'Image Text',
			id: '0',
		},
	];

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
	let blogImage1 = ''
	let blogImage2 = ''

	if (length > 2) {
		// console.log(blogPosts.length)
		// console.log(blogPosts)

		blogImage1 = blogPosts[length - 2].linkToPicture
		blogImage2 = blogPosts[length - 3].linkToPicture
		if (blogImage1 === '' || blogImage1 === undefined) {
			blogImage1 = image1
			// console.log('image variable is undefined or null');
		}
		if (blogImage2 === '' || blogImage2 === undefined) {
			blogImage2 = image2
			// console.log('image variable is undefined or null');
		}

		featuredPosts = [
			{
				title: blogPosts[length - 2].title,
				date: 'Feb 20',
				description: blogPosts[length - 2].content,
				image: blogImage1,
				imageLabel: blogImage1,
				id: blogPosts[length - 2]._id,
			},
			{
				title: blogPosts[length - 3].title,
				date: 'Feb 21',
				description: blogPosts[length - 3].content,
				image: blogImage2,
				imageLabel: blogImage2,
				id: blogPosts[length - 3]._id,
			},
		];
	}
	else if (length > 1 && length < 2) {

		blogImage1 = blogPosts[length - 2].linkToPicture
		if (blogImage1 === '' || blogImage1 === undefined) {
			blogImage1 = image1
			// console.log('image variable is undefined or null');
		}

		featuredPosts = {
			title: blogPosts[length - 2].title,
			date: 'Feb 20',
			description: blogPosts[length - 2].content,
			image: blogImage1,
			imageLabel: blogImage1,
			id: blogPosts[length - 2]._id,
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