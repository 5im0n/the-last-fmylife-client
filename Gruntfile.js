module.exports = function(grunt) {

	'use strict';

	grunt.initConfig({


		// Clean dist directory //
		clean: {
			dist: 'dist/'
		},


		// Check JS Files //
		jshint: {
			options: {
				jshintrc: 'grunt/.jshintrc'
			},
			all: ['Gruntfile.js', 'js/**/*.js']
		},


		// Check Style JS Files //
		jscs: {
			options: {
				config: 'grunt/.jscsrc'
			},
			main: ['Gruntfile.js', 'js/**/*.js']
		}


	});


	// Load the Tasks //
	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});


	// Check tasks //
	grunt.registerTask('check', ['jshint', 'jscs']);

};