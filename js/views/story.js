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
			'click small[data-action="delete-story"]'  : 'deleteStory'
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
		},



		/** Function to delete the story
		*/
		deleteStory: function() {
			var self = this;

			this.model.destroy({
				success: function() {
					// Animate and delete the DOM element //
					self.$el.slideUp('slow', function() {
						self.$el.remove();
					});
				},
				error: function() {
					throw new Error('Unable to delete the story');
				}

			});
		}


	});

	return StoryView;

});
