/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'jquery',
	'backbone',

	'stories',
	'storyView'

], function($, Backbone, Stories, StoryView) {

	'use strict';


	/******************************************
	* Stories View
	*/
	var StoriesView = Backbone.View.extend({

		el           : '#page-container',

		templateHTML : 'templates/stories.html',


		// The DOM events //
		events: {

		},



		/** View Initialization
		*/
		initialize: function() {
			var self = this;

			this.cStories = new Stories();

			// Fetch the collection //
			this.cStories.fetch().done(function() {
				self.render();
			});
		},



		/** Display the view
		*/
		render: function() {
			var self = this;

			$.get(this.templateHTML, function(templateData) {

				var template = _.template(templateData, {
					numberOfStories	: self.cStories.count,
					authors			: self.getAuthors()
				});

				self.$el.html(template);

				// Create item Story View //
				_.each(self.cStories.models, function(s) {
					var view = new StoryView({ model: s });
					self.$el.find('#stories-container').append(view.render().el);
				});

			});

			return this;
		},



		/** Get the authors of the stories
		*/
		getAuthors: function() {
			return _.uniq(this.cStories.models, function(s) {
				return (s.attributes.author);
			});
		}

	});

	return StoriesView;

});