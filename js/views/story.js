/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'jquery',
	'backbone',
	'moment',
	'bootstrap'

], function($, Backbone, moment) {

	'use strict';


	/******************************************
	* Story View
	*/
	var StoryView = Backbone.View.extend({

		tagName       : 'div',

		templateHTML  : 'templates/story.html',


		// The DOM events //
		events: {

		},



		/** Display the view
		*/
		render: function() {
			var self = this;

			$.get(this.templateHTML, function(templateData) {

				var template = _.template(templateData, {
					story  : self.model.toJSON(),
					moment : moment
				});

				self.$el.html(template);

				$('*[data-toggle="tooltip"]').tooltip();

			});

			return this;
		}

	});

	return StoryView;

});
