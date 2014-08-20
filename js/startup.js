/*!
 * the-last-fmylife-client
 * Copyright 2014 Simon MAHÉ <mahe.simon@gmail.com>
 * Licensed under AGPL-3.0 (https://www.gnu.org/licenses/agpl.txt)
 */

/******************************************
* Require JS Configuration
*/
requirejs.config({


	paths: {

		/* #############
		* Libs
		*/
		jquery				: '../bower_components/jquery/dist/jquery',
		underscore			: '../bower_components/underscore/underscore',
		backbone			: '../bower_components/backbone/backbone',
		moment				: '../bower_components/moment/moment',
		bootstrap			: '../bower_components/bootstrap/dist/js/bootstrap',
		'underscore.string'	: '../bower_components/underscore.string/lib/underscore.string',

		app					: 'app',
		common              : 'common',


		/* #############
		* Routers
		*/
		router			    : 'routers/router',


		/* #############
		* Views
		*/
		headerView			: 'views/header',
		footerView			: 'views/footer',
		aboutView			: 'views/about',
		storiesView         : 'views/stories',
		notFoundView        : 'views/404'

	},

	'bootstrap': {
  		deps   : ['jquery'],
		exports: 'bootstrap'
	}

});



/******************************************
* Start The App
*/
require([
	'app', 'underscore', 'underscore.string'
], function(app, _, _s) {

	'use strict';

	_.str = _s;
	_.mixin(_.str.exports());

	app.init();

});