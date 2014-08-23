/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'jquery',
	'backbone',
	'common',

	'stories',
	'storyView'

], function($, Backbone, Common, Stories, StoryView) {

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
		initialize: function(options) {
			var self = this;

			Common.router.setPageTitle('Fmylife stories'); // Change the page title

			this.cStories = new Stories();

			// Fetch the collection //
			this.cStories.fetch({ data: options }).done(function() {
				self.render();
			});
		},



		/** Display the view
		*/
		render: function() {
			var self = this;

			// Get the author of the stories for the first time //
			if (_.isUndefined(Common.authors)) {
				Common.authors = this.getAuthors();
			}

			$.get(this.templateHTML, function(templateData) {

				var template = _.template(templateData, {
					numberOfStories	: self.cStories.count,
					authors			: Common.authors
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
