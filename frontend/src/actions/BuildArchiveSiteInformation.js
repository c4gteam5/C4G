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
const getPostsURL = GetServerUrl + "api/blog/getall";


function BuildArchiveSiteInformation() {
	const [blogPosts, blogPostsSwitch] = useState([])
	let blogTitle = []
	let blogBody = []
	let blogImage = []
	let blogURL = []
	let targetURL = "/read-blog-post?id="
	let siteText = ''
	let siteTextSend = []
	let divider = []

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

	// We need to capture all the blogpost data
	for (let i = 0; i < blogPosts.length; i++) {
		if ( (blogPosts[i].title == undefined || blogPosts[i].title == null || blogPosts[i].title == '') ) {
			blogTitle.push('Empty Title')}
		else {
			blogTitle.push(blogPosts[i].title)
		}

		if ( (blogPosts[i].content == undefined || blogPosts[i].content == null || blogPosts[i].content == '') ) {
			blogBody.push('Empty Body') }
		else {
			blogBody.push(blogPosts[i].content)
		}

		if ( (blogPosts[i].linkToPicture == undefined || blogPosts[i].linkToPicture == null || blogPosts[i].linkToPicture == '') ) {
			blogImage.push(logo) }
		else {
			blogImage.push(blogPosts[i].linkToPicture)
		}

		if ( (blogPosts[i]._id == undefined || blogPosts[i]._id == null || blogPosts[i]._id == '') ) {
			blogURL.push(GetServerUrl) }
		else {
			blogURL.push(targetURL + blogPosts[i]._id)
		}


	}

	// And then we need to build the markdown return
	for (let j = 0; j < blogPosts.length; j++) {
		var text = "# " + blogTitle[j] + "\n\n" + blogBody[j]
		if (text.length > 269) {
			text = text.substring(0, 269)
			text = text + "..."
			siteTextSend.push(text)
		}
		else {
			siteTextSend.push("# " + blogTitle[j] + "\n\n" + blogBody[j])
		}
	}

	return (
		<Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}} id="output">
			{siteTextSend.map((text, index) => {
				return <div>
					<Divider />
					<ReactMarkdown children={text}/>
					<Link variant="subtitle1" href={blogURL[index]}>Continue Reading...</Link>
				</div>
			})}
			
		</Grid>
	)
}

export default BuildArchiveSiteInformation;
