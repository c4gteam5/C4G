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
import Header from './utils/Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './utils/Footer';

// ~~~ Static Assets ~~~ //
import siteInfo1 from '../static/media/site-info/site-info1.md';
import siteInfo2 from '../static/media/site-info/site-info2.md';

import logo from '../static/media/pictures/CyientP5Logo.png';

// ~~~ Blog Posts Assets ~~~ //
const getPostsURL = "http://localhost:8000/api/blog/getall";
// const baseURL = "https://c4g-backend-2.onrender.com/api/blog/getall";


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const sections = [
	{title: 'Parent Organization', url: 'https://www.cyient.com/'}
];

// const mainFeaturedPost = {
// 	title: 'Volunteer Sign Up!',
// 	description: "This is a test holder for a featured post for volunteers to sign up for",
// 	image: logo,
// 	imageText: 'main image description',
// 	linkText: 'Continue reading…',
// };

const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Feb 20',
		description: 'Not enough stored posts - go and make some! This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Unsplash random image',
	},
	{
		title: 'Post title',
		date: 'Feb 21',
		description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
		image: 'https://source.unsplash.com/random',
		imageLabel: 'Image Text',
	},
];


// ~~~ Page Assets ~~~ //
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


// const [blogPosts, blogPostsSwitch] = useState([])
// ~~~ Let's grab all the blog posts ~~~ //
function GrabPosts() {
	const [blogPosts, blogPostsSwitch] = useState([])

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
	// var blogPosts = [];
	// const [blogPosts, blogPostsSwitch] = useState([])

	// React.useEffect(() => {
	// 	axios.get(getPostsURL)
	// 		.then((response) => {
	// 			response.data.posts[0]((post) => {
	// 				blogPostsSwitch(post)
	// 			})


	// 			// blogPosts.append(response.data.posts)
	// 			// console.log(response.data.posts[0]._id)
	// 			// console.log(response.data.posts[0].title)
	// 			// console.log(response.data.posts[0].content)
	// 		});
	// 	}, 
	// []);

	// React.useEffect(() => {
	// 	axios.get(getPostsURL)
	// 		.then((response) => {response.json())
	// 		.then((data) => { try {
	// 			blogPostsSwitch(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	});
	// 	}, 
	// []);

	useEffect(() => {
		const fetchData = async() => {
			const result = await axios(getPostsURL);
			// blogPostsSwitch(result.data.posts);
			blogPostsSwitch(result.data);
			// console.log(result.data.posts)
		};
		fetchData();
	}, []);

	// blogPosts.forEach((post) => console.log(post));
	// console.log(blogPosts)

	// useEffect(() => {
	// 	fetchTodos();
	// }, [])

	// console.log(blogPosts);
	// var myArray = blogPosts;
	// console.log(myArray.length)

	return (
		blogPosts
	)
}

// ~~~ Build the main post, two featured posts, and any additional posts ~~~ //
function buildPosts() {
	var blogPosts = [];
	blogPosts = GrabPosts()

	// console.log(blogPosts)

	// blogPosts.forEach((post) => console.log(post));
	var newDate = new Date();
	var date = newDate.getDate();
	var month = monthNames[newDate.getMonth()];
	// console.log(blogPosts.posts.length);
	// if (blogPosts.length > 0 && ) {
	// 	console.log(month, date);
	// }

	// console.log(blogPosts);

	return (
		// <Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}}>
		// 	<Divider />
		// 	blogPosts.map((post) => {
		// 		<ReactMarkdown children={posts.title, posts.content} />
		// 	}
		// </Grid>
		blogPosts
	)
}


// ~~~ Capture Markdown Information to JSX ~~~ //
const SiteInformation = (): JSX.Element => {
	const [siteText1, setSiteText1] = useState('')
	const [siteText2, setSiteText2] = useState('')
	
	useEffect(() => {
		fetch(siteInfo1).then(res => res.text()).then(text => setSiteText1(text))
	})
	
	useEffect(() => {
		fetch(siteInfo2).then(res => res.text()).then(text => setSiteText2(text))
	})

	return (
		<Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}}>
			<Divider />
			<ReactMarkdown children={siteText1} />
			<Divider />
			<ReactMarkdown children={siteText2} />
		</Grid>
	)
}

const MainFeaturedPostInformation = (): JSX.Element => {
	var blogPosts = [];
	blogPosts = GrabPosts();
	var arr = [];
	// console.log(blogPosts)
	for (var post in blogPosts.posts[0]) {
		arr.push(post)
		console.log(post)
	}
	// console.log(blogPosts.length)

	// var length = try {blogPosts.length} catch (error) {console.log(error)}

	var mainFeaturedPost = {
		title: 'Volunteer Sign Up!',
		description: "This is a test holder for a featured post for volunteers to sign up for - go make some posts!",
		image: logo,
		imageText: 'logo image',
		linkText: 'Continue reading…',
	};

	// if (arr.length > 0) {
	// 	mainFeaturedPost = {
	// 		title: blogPosts.posts[0].title,
	// 		description: blogPosts.posts[0].content,
	// 		image: logo,
	// 		imageText: 'main image description',
	// 		linkText: 'Continue reading…',
	// 	};
	// }

	return (
		<MainFeaturedPost post={mainFeaturedPost} />
	)
}

const theme = createTheme();

export default function Blog() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="Cyient Foundation - P5" sections={sections} />
				<main>
					<MainFeaturedPostInformation />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
						  <FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
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