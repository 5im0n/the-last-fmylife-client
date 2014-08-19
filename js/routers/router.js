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

], function(Common, $, Backbone, HeaderView, FooterView) {

	'use strict';


	/******************************************
	* Application Router
	*/
	var router = Backbone.Router.extend({


		routes: {
			''				: 'index',
			'about'			: 'about',
			'*invalidRoute'	: 'notFound'
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
		index: function() {
			console.log('Home page');
		},


		/** About the App
		*/
		about: function() {
			console.log('About page');
		},


		/** Not found
		*/
		notFound: function() {
			console.error('Page not found');
		}


	});

	return router;

});