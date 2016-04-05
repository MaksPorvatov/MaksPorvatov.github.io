module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'js/src/jquery-1.9.1.js',
               'js/src/jquery.xdomainrequest.min.js',
               'js/src/jquery.flexslider-min.js',
               'js/src/isotope.js',
               'js/src/template.js',
               'js/src/script.js',
               'src/js/*.js'],
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
        src: ["styles/*.css"],
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
    },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'styles',
        ext: '.css'
      }]
    }
  },
  watch: {
    sass: {
      files: ['styles/*.scss'],
      tasks: ['sass'],
    }
  },

});

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin', 'watch']);
 
};