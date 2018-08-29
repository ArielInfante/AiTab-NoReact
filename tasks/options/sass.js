module.exports = {
    dist: {
        options: {
            style: 'expanded'
        },
        files: [{
            expand: true,
            cwd: 'css/sass/',
            src: ['*.scss', '*.sass'],
            dest: 'css/',
            ext: '.css'
        }]
    }
}