/*jslint indent: 2*/
/*global grunt*/

module.exports = function (grunt) {
  grunt.initConfig({
    site: grunt.file.readJSON('data/site.json'),

    assemble: {
      options: {
        flatten: true,
        assets: '<%= site.destination %>/assets',
        data: ['data/*.json', 'package.json'],
        layout: 'default.hbs',
        layoutdir: 'templates/layouts',
        partials: ['templates/partials/**/*.{hbs,md}']
      },
      styleguide: {
        src: 'pages/*.md',
        dest: '<%= site.destination %>'
      }
    },

    clean: {
      build: {
        src: ['<%= site.destination %>']
      }
    },

    sass: {
      dist: {
        options: {
          require: 'sass-json-vars'
        },
        files: {
          './output/assets/css/styleguide.css': './scss/styleguide.scss'
        }
      }
    }

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['clean', 'sass', 'assemble']);
};
