/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'common',
	'backbone',
	'story'

], function(Common, Backbone, Story) {

	'use strict';


	/******************************************
	* Stories Collection
	*/
	var StoriesCollection = Backbone.Collection.extend({


		model: Story,

		url: '/api/posts',

		count: 0,


		parse: function(response) {
			this.count = response.count;
			return response.posts;
		}


	});

	return StoriesCollection;

});