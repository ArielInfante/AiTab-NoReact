module.exports = function(grunt) {
    grunt.registerTask('final', ['haml', 'pug', 'htmlmin', 'sass', 'csscomb', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'imagemin', 'svgmin', 'copy', 'compress']);
}