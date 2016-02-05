module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }, 
    },
    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },

    concat_css: {
      options: {
        // Task-specific options go here. 
      },
      all: {
        src: ["js/css/*.css"],
        dest: "js/dist/style.main.css"
      },
    },

    cssmin: {
     options: {
       shorthandCompacting: false,
       roundingPrecision: -1
    },
    target: {
      files: {
      'js/css/style.concat.css': ['js/dist/style.main.css']
    }
  }
}

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);
 
};