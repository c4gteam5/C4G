export default {
	module: {
		rules: [
		  {
			test: /\.md$/,
			use: [
			  {
				loader: "html-loader",
			  },
			  {
				loader: "markdown-loader",
				options: {
				  // Pass options to marked
				  // See https://marked.js.org/using_advanced#options
				},
			  },
			],
		  },
		],
	},
};