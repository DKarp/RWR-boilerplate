# RWR-boilerplate

App boilerplate for project on top of React, Webpack and Rails.
Based on https://github.com/netguru/react_webpack_rails.

NOT RESOLVED
	- server side react components with RWR
	- separate css bundle with webpack ExtractTextPlugin
	- render rails layout without yield and react_controller

RESOLVED
	- Rails + React + Webpack
	- Hot Module Replacement
	- SASS
	- Autoprefixer
	- Foundation

rvm gemset create _NAME_

rails 5+
ruby 2.3.0+
node 5+
npm 3+
nvm any

rails new _NAME_

edit Gemfile:
		off:
		# gem ‘turbolinks’
		# gem 'spring'
		# gem 'spring-watcher-listen'
		add:
		gem 'react_webpack_rails' , '~> 0.3.1'           https://github.com/netguru/react_webpack_rails
		gem 'foreman'                                    http://ddollar.github.io/foreman/

edit app/assets/javascripts/application.js
		// require jquery
		// require jquery_ujs
		// require turbolinks
		//= require react_integration
		//= require react_bundle
		//= require_tree .

edit app/views/layouts/application.html.erb
		<!DOCTYPE html>
		<html>
		  <head>
		    <title>RailsReact</title>
		    <%= csrf_meta_tags %>
		    <%= action_cable_meta_tag %>

		    <%= stylesheet_link_tag 'application' %>
		    <%= javascript_include_tag 'application' %>
		    <%= render 'layouts/no_script' %>
		  </head>

		  <body>
		    <%= render 'layouts/react_hot_assets' %>
		    <%= yield %>
		  </body>
		</html>

create app/views/layouts/_no_script.html __
		<noscript>
			<style>
				body {
					padding: 0;
					margin: 0;
					font-size: 28px;
					text-align: center;
					line-height: 100vh;
				}
				body::after {
					content: "Please enable JavaScript in your browser to view this site.";
				}
			</style>
		</noscript>


create Procfile in app root:
		RAILS:        rails s -p 3000
		WEBPACK:      npm run start-hot-dev

bundle
rails g react_webpack_rails:install --no-karma-setup --no-example
npm install
npm install style-loader css-loader node-sass@^3.4.2 react-mixin foundation-sites jquery react-router --save
npm install autoprefixer-loader --save-dev

edit webpack.config.js file 		                    https://webpack.github.io/docs/stylesheets.html
		// var ExtractTextPlugin = require('extract-text-webpack-plugin');

		module.exports = {
		  entry: {
		    main: ['./app/react/index.js']
		  },
		  output: {
		    path: __dirname + '/app/assets/javascripts',
		    filename: 'react_bundle.js'
		  },
		  module: {
		    loaders: [
		      {
		        key: 'jsx',
		        test: /\.jsx?$/,
		        exclude: /(node_modules)/,
		        loaders: [ 'babel' ]
		      },
		      {
		        key: 'scss',
		        test: /\.scss$/,
		        loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader' // - inline: working
		        // loader: ExtractTextPlugin.extract('css!sass') // - generated: not working
		      },
		      {
		        key: 'css',
		        test: /\.css$/,
		        loader: 'style-loader!css-loader!autoprefixer-loader' // - inline: working
		        // loader: ExtractTextPlugin.extract('css!sass') // - generated: not working
		      }
		    ]
		  },
		  resolve: {
		    extensions: ['', '.js', '.jsx', '.js.jsx']
		  },
		  plugins: [
		    // new ExtractTextPlugin('../stylesheets/react_bundle.css', {
		    //   allChunks: true
		    // })
		  ]
		};


create app/react/config/foundation_settings.scss
		https://raw.githubusercontent.com/zurb/foundation-sites/master/scss/settings/_settings.scss

		fix @import 'util/util'; to @import 'node_modules/foundation-sites/scss/util/util';

create app/react/config/globals.js
		'use strict';

		import $ from 'jquery';

		let global = window || global;

		global.jQuery = $;
		global.$ = $;


create app/react/config/foundation_init.scss
		@import 'foundation_settings';
		@import 'node_modules/foundation-sites/scss/foundation';

		@include foundation-flex-grid;
		/* @include foundation-grid; */

		@include foundation-everything;

		/* @include foundation-typography; */
		/* @include foundation-button; */
		/* @include foundation-forms; */
		/* @include foundation-visibility-classes; */
		/* @include foundation-float-classes; */
		/* @include foundation-accordion; */
		/* @include foundation-accordion-menu; */
		/* @include foundation-badge; */
		/* @include foundation-breadcrumbs; */
		/* @include foundation-button-group; */
		/* @include foundation-callout; */
		/* @include foundation-close-button; */
		/* @include foundation-drilldown-menu; */
		/* @include foundation-dropdown; */
		/* @include foundation-dropdown-menu; */
		/* @include foundation-flex-video; */
		/* @include foundation-label; */
		/* @include foundation-media-object; */
		/* @include foundation-menu; */
		/* @include foundation-off-canvas; */
		/* @include foundation-orbit; */
		/* @include foundation-pagination; */
		/* @include foundation-progress-bar; */
		/* @include foundation-slider; */
		/* @include foundation-sticky; */
		/* @include foundation-reveal; */
		/* @include foundation-switch; */
		/* @include foundation-table; */
		/* @include foundation-tabs; */
		/* @include foundation-thumbnail; */
		/* @include foundation-title-bar; */
		/* @include foundation-tooltip; */
		/* @include foundation-top-bar; */

create app/react/index.scss
		@import "app/react/config/variables";

		* {
			outline: none;
		}

		html {
			font-size: 16px;
			font-family: $default-font;
			word-wrap: break-word;
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			text-rendering: optimizeLegibility;
		}

		body {
			font-family: inherit;
			color: inherit;
			min-height: 100vh;
			height: auto;
			max-width: 100%;
		}

		ul, ol {
			font-size: inherit;
			margin-left: 1.3rem;
		}

		select {
			height: auto;
		}

		textarea {
			max-width: 100%;
			overflow: hidden !important;
		}

		iframe {
			display: block;
			max-width: 100%;
			border: none;
		}

		video {
			display: block;
			max-width: 100%;
		}

		[hidden] {
			display: none !important;
		}

		[disabled] {
			opacity: 0.5 !important;
			pointer-events: none;
		}

		.sprite,
		.sprite-before::before,
		.sprite-after::after {
			background-size: 200px 200px;
			background-image: url("/images/sprite.png");
		}

edit app/react/index.js
		import './config/foundation_init.scss';
		import './index.scss';

		import './config/globals.js';
		import 'foundation-sites';
		import RWR from 'react-webpack-rails';
		import HelloWorld from './components/hello-world';

		RWR.run();
		RWR.registerComponent('HelloWorld', HelloWorld);

		$(document).foundation();


===
foreman start
===

+ .gitignore
+ .eslintrc
+ .eslintignore
