/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'common',
	'jquery',
	'backbone',

	'headerView',
	'footerView',
	'aboutView',
	'storiesView',
	'notFoundView'

], function(Common, $, Backbone, HeaderView, FooterView, AboutView, StoriesView, NotFoundView) {

	'use strict';


	/******************************************
	* Application Router
	*/
	var router = Backbone.Router.extend({


		routes: {
			''                     : 'index',
			'posts/author/:author' : 'index',
			'about'                : 'about',
			'*invalidRoute'	       : 'notFound'
		},


		/** Router Initialization
		*/
		initialize: function() {

			// Header, Footer view Initialize //
			Common.views.headerView = new HeaderView();
			Common.views.footerView = new FooterView();

			// Trigger when the route change //
			this.bind('route', this.routeChange);
		},


		/** Change the Title of the page
		*/
		setPageTitle: function(title) {
			$(document).attr('title', title);
		},


		/** When the route change
		*/
		routeChange: function() {
			Common.views.headerView.render(); // Render the headerview to refresh the menu
		},



		/******************************************
		* ROUTES FUNCTION
		*/

		/** Home page
		*/
		index: function(author) {
			var params = {};

			if(!_.isNull(author)) {
				params = {author: author};
			}

			Common.views.main = new StoriesView(params);
		},


		/** About the App
		*/
		about: function() {
			Common.views.main = new AboutView();
		},


		/** Not found
		*/
		notFound: function() {
			Common.views.main = new NotFoundView();
		}


	});

	return router;

});