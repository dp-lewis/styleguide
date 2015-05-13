/*jslint indent: 2*/
/*global grunt*/

module.exports = function (grunt) {
  grunt.initConfig({
    site: grunt.file.readJSON('src/data/site.json'),

    assemble: {
      options: {
        flatten: true,
        assets: '<%= site.destination %>/assets',
        data: ['src/data/*.{json,yml}', 'package.json'],
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
    }

  });

  grunt.loadNpmTasks('assemble');
  grunt.registerTask('default', ['clean', 'assemble']);
  grunt.loadNpmTasks('grunt-contrib-clean');

};
