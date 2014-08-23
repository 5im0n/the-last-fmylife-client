/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'jquery',
	'backbone'

], function($, Backbone) {

	'use strict';


	/******************************************
	* Header View
	*/
	var HeaderView = Backbone.View.extend({

		el           : '#page-header',

		templateHTML : 'templates/header.html',


		// The DOM events //
		events: {
			'click li.disabled' : 'preventDefault'
		},



		/** Display the view
		*/
		render: function() {
			var self = this;

			$.get(this.templateHTML, function(templateData) {

				var template = _.template(templateData, {
					currentUrl: Backbone.history.fragment
				});

				self.$el.html(template);


				// Set menu as active //
				self.$el.find('.nav.nav-pills li').each(function() {
					$(this).removeClass('active');

					if($(this).children('a').attr('href') === '#'+Backbone.history.fragment) {
						$(this).addClass('active');
					}
				})

			});

			return this;
		},


		preventDefault: function(event){
			event.preventDefault();
		},


	});

	return HeaderView;

});