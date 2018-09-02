module.exports = function(grunt) {
    grunt.registerTask('default', ['pug', 'sass', 'cssmin', 'jshint', 'concat', 'uglify', 'copy']);
}