module.exports = function(grunt) {
    grunt.registerTask('default', ['pug', 'htmlmin', 'sass', 'cssmin', 'jshint', 'concat', 'uglify']);
}