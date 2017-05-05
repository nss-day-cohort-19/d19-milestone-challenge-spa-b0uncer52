module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$", "XMLHttpRequest" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"CarLot":true} //name value pairs, allows to define global vars used in many files.
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/styles.css': '../sass/styles.scss' // files to be put : where to find
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};