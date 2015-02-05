'use strict';

var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  [
    'grunt-firefoxos',
  ].forEach(grunt.loadNpmTasks);

//  grunt.loadTasks('tasks');

  grunt.initConfig({

    ffospush: {
      app: {
        appId: '<%= grunt.config.get("origin") %>',
        zip: 'application.zip'
      }
    },

    ffosstop: {
      app: {
        appId: '<%= grunt.config.get("origin") %>'
      }
    },

    ffoslaunch: {
      app: {
        appId: '<%= grunt.option("origin") %>',
      }
    }
  });

  grunt.registerTask('run', 'Run App', [
//    'ffosstop:app',
//    'ffospush:app',
    'ffoslaunch:app'
  ]);

  grunt.registerTask('default', ['run']);
};
