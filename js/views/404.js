/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'jquery',
	'backbone',
	'common'

], function($, Backbone, Common) {

	'use strict';


	/******************************************
	* 404 not found View
	*/
	var NotFoundView = Backbone.View.extend({

		el           : '#page-container',

		templateHTML : 'templates/404.html',


		/** View Initialization
		*/
		initialize: function() {
			this.render();
		},



		/** Display the view
		*/
		render: function() {
			var self = this;

			Common.router.setPageTitle('Page not found'); // Change the page title

			$.get(this.templateHTML, function(templateData) {

				var template = _.template(templateData);

				self.$el.html(template);

			});

			return this;
		}

	});

	return NotFoundView;

});