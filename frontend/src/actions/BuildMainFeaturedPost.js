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
import MainFeaturedPost from '../components/MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
// import Sidebar from './Sidebar';
// import Footer from './utils/Footer';

import logo from '../static/media/pictures/CyientP5Logo.png';

// ~~~ Blog Posts Assets ~~~ //
const getPostsURL = "http://localhost:8000/api/blog/getall";
// const baseURL = "https://c4g-backend-2.onrender.com/api/blog/getall";





function BuildMainFeaturedPost () {
	const [blogPosts, blogPostsSwitch] = useState([])
	// var blogPosts = [];

	var mainFeaturedPost = {
		title: 'Volunteer Sign Up!',
		description: "This is a test holder for a featured post for volunteers to sign up for",
		image: logo,
		imageText: 'main image description',
		linkText: 'Continue reading…',
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

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	const result = await axios(
	// 		getPostsURL,
	// 	);

	// 	blogPostsSwitch(result.posts);
	// 	};

    // 	fetchData();
	// }, []);

	// React.useEffect(() => {
	// 	axios.get(getPostsURL)
	// 		.then((response) => {
	// 			response.data.posts[0]((post) => {
	// 				blogPostsSwitch(post)
	// 			})
	// 		})
	// 	})

	  
	//   const getData = async () => {
	//   	try {
	// 	    const response = await fetch(getPostsURL);
	// 	    const data = await response.json();
	// 	    blogPostsSwitch(data);
	// 	    return data;
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	//   };

	//   await getData();
	//   // console.log(data_local);
	  
	// })();

	// const fetchTodos = async () => {
	//   try {
	//     const response = await fetch(getPostsURL);
	//     const data = await response.json();
	//     blogPostsSwitch(data);
	//     // console.log(data);
	//   } catch (error) {
	//     console.log(error);
	//   }
	// };
	
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
		};
	}

	return (
		<MainFeaturedPost post={mainFeaturedPost} />
	)
}

export default BuildMainFeaturedPost;