module.exports = function(grunt) {
    'use strict';

    var staticDir = 'static/';

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title %> - <%= pkg.homepage %> last modified <%= grunt.template.today("yyyy-mm-dd") %>*/',

        staticDir: staticDir,

        clean: {
            dist: {
                src: [
                    '<%= staticDir %>dist/',
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: true
            },
            project : {
                src: '<%= staticDir %>js/**/*.js'
            }
        },

        less: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    compress: true,
                    sourceMap: true,
                    sourceMapURL: '/<%= staticDir %>dist/adrianborrmann.com.min.css.map',
                    outputSourceFiles: true
                },
                files: {
                    '<%= staticDir %>dist/adrianborrmann.com.min.css': '<%= staticDir %>less/adrianborrmann.com.less'
                }
            }
        },

        uglify: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    mangle: true,
                    compress: true,
                    screwIE8: true,
                    sourceMap: true,
                },
                files: [{
                    expand: true,
                    cwd: '<%= staticDir %>js',
                    src: '**/*.js',
                    dest: '<%= staticDir %>dist'
                }]
            }
        },

        watch: {
            static: {
                options: {
                    livereload: true,
                },
                files: ['<%= staticDir %>less/**/*.less', '<%= staticDir %>js/**/*.js'],
                tasks: ['default']
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        'clean',
        'less',
        'jshint',
        'uglify',
    ]);
    grunt.registerTask('default', ['build']);
};
