module.exports = function(grunt) {
    'use strict';

    var static_folder = 'static/';
    var assets = require('grunt-assets')
        .importAssets(grunt, 'assets.json', static_folder);


    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; */',

        static_folder: static_folder,

        less: assets.getLessConfig(),

        //jshint: {
        //    options: {
        //        jshintrc: '<%= static_folder %>js/.jshintrc'
        //    },
        //    gruntfile: {
        //        options: {
        //            jshintrc: '.jshintrc'
        //        },
        //        src: 'Gruntfile.js'
        //    },
        //    project : {
        //        src: '<%= static_folder %>js/**/*.js'
        //    }
        //},

        concat: assets.getConcatConfig({
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            }
        }),

        uglify: assets.getUglifyConfig({
            options: {
                banner: '<%= banner %>'
            }
        }),

        regarde: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint:gruntfile'],
                options: {
                    nocase: true
                }
            },
            javascript: {
                files: ['<%= static_folder %>js/*.js'],
                tasks: ['livereload', 'clean:javascript', 'jshint', 'concat', 'uglify']
            },
            less: {
                files: ['<%= static_folder %>less/*.less'],
                tasks: ['clean:css', 'less', 'livereload']
            },
            templates: {
                files: [
                    'templates/**/*.html'
                ],
                tasks: ['livereload']
            },
            assets: {
                files: ['assets.json', '**/*.mo'],
                tasks: ['exec:reload_assets']
            }
        },

        clean: {
            javascript: {
                src : ['<%= static_folder %>dist/**/*.js']
            },
            css: {
                src : ['<%= static_folder %>dist/**/*.css']
            }
        },

        exec : {
            reload_assets : {
                cmd: 'touch settings.py'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-exec');

    //grunt.registerTask('build', ['clean', 'less', 'concat', 'uglify', 'jshint']);
    grunt.registerTask('build', ['clean', 'less', 'concat', 'uglify']);

    grunt.registerTask('watch', ['livereload-start', 'clean', 'less', 'regarde']);

    grunt.registerTask('default', ['build']);
};
