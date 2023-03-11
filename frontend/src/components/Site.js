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
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';

// ~~~ Static Assets ~~~ //
import siteInfo1 from '../static/media/site-info/site-info1.md';
import siteInfo2 from '../static/media/site-info/site-info2.md';

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

const sections = [
	{title: 'Technology', url: '#'},
	{title: 'Design', url: '#'},
	{title: 'Culture', url: '#'},
	{title: 'Business', url: '#'},
	{title: 'Science', url: '#'},
	{title: 'Health', url: '#'},
	{title: 'Education', url: '#'}
];

const mainFeaturedPost = {
	title: 'Title of a longer featured blog post',
	description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	image: 'https://source.unsplash.com/random',
	imageText: 'main image description',
	linkText: 'Continue reading…',
};

const featuredPosts = [
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

const sidebar = {
	title: 'About',
	description: 'This could be used for web articles, other links, etc.',
	archives: [
		{title: 'Some News article for Feb. 2023', url: '#'},
	],
	social: [
		{name: 'GitHub', icon: GitHubIcon},
		{name: 'Twitter', icon: TwitterIcon},
		{name: 'Facebook', icon: FacebookIcon},
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
					<MainFeaturedPost post={mainFeaturedPost} />
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
			<Footer title="Cyient Foundation - P5" />
		</ThemeProvider>
	);
}