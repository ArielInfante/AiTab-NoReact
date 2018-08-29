module.exports = {
    minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '*.resorted.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
    }
}