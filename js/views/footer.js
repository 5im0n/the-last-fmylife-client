/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'common',
	'jquery',
	'backbone',
	'bootstrap'

], function(Common, $, Backbone) {

	'use strict';


	/******************************************
	* Footer View
	*/
	var FooterView = Backbone.View.extend({

		el           : '#page-footer',

		templateHTML : 'templates/footer.html',



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
					prop: Common.properties
				});

				$(self.el).html(template);

				$('*[data-toggle="tooltip"]').tooltip();
			});

			return this;
		}


	});

	return FooterView;

});