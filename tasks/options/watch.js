module.exports = {
    options: {
        livereload: false,
    },
    html: {
        files: ['pug/**/*.{pug,html}', 'pug/*.{pug,html}', '*.{pug,html}'],
        tasks: ['pug'],
        options: {
            spawn: false,
        }
    },
    css: {
        files: ['css/**/*.css','css/*.css', 'css/**/*.sass','css/*.sass'],
        tasks: ['sass', 'cssmin', 'concat'],
        options: {
            spawn: false,
        }
    },
    scripts: {
        files: ['js/**/*.js', 'js/*.js'],
        tasks: ['concat', 'uglify', 'jshint'],
        options: {
            spawn: false,
        }
    },
    images: {
        files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
            spawn: false,
        }
    }
}