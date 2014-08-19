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

			// Load configuration and properties files //
			this.loadFiles().done(function() {

				// Router initialization //
				Common.router = new Router();

				// Listen url changes //
				Backbone.history.start({pushState: false});
			});
		},



		/** Load files
		*/
		loadFiles: function() {

			// Retrieve App properties, configuration and language //
			return $.when($.get('config/configuration.json'), $.get('package.json')).then(function(properties_data, configuration_data) {

					// Set the app properties configuration and language //
					Common.properties	 = configuration_data[0];
					Common.configuration = properties_data[0];

					// Set the Ajax Setup //
					//app.setAjaxSetup();
			})
			.fail(function() {
				window.alert('Unable to init the app: Configuration file missing');
			});

		}

	};

	return app;

});