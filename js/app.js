/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

define('app', [

	'common',
	'jquery',
	'router'

], function(Common, $, Router) {

	'use strict';

	var app = {


		/** Application initialization
		 */
		init: function() {

			// Load properties files //
			$.get('package.json').done(function(properties) {

				Common.properties = properties;

				// Router initialization //
				Common.router = new Router();

				// Listen url changes //
				Backbone.history.start({ pushState: false });
			})
			.fail(function() {
				throw new Error('Unable to init the app: Properties file missing');
			});
		}

	};

	return app;

});
