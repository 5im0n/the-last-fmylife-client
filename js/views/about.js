/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'common',
	'jquery',
	'backbone'

], function(Common, $, Backbone) {

	'use strict';


	/******************************************
	* About View
	*/
	var AboutView = Backbone.View.extend({

		el           : '#page-container',

		templateHTML : 'templates/about.html',



		/** View Initialization
		*/
		initialize: function () {
			this.render();
		},



		/** Display the view
		*/
		render: function () {
			var self = this;

			$.get(this.templateHTML, function(templateData){

				// Templating //
				var template = _.template(templateData, {
				});

				$(self.el).html(template);

				//$('*[data-toggle="tooltip"]').tooltip();
			});

			return this;
		}


	});

	return AboutView;

});