/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define([
	'backbone',
	'moment'

], function(Backbone, moment) {

	'use strict';


	/******************************************
	* Story Model
	*/
	var StoryModel = Backbone.Model.extend({


		url: '/posts',


		// Defaults values //
		defaults:{
			id		: null,
			author	: '',
			content	: '',
			date	: moment()
		},


		/** Validate model function
		 */
		validate: function(attrs) {
			if (attrs.content === '') {
				return 'Can\'t be empty';
			}
		}

	});

	return StoryModel;

});
