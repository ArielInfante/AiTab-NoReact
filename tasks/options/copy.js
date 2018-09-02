module.exports = {
    main: {
        files: [{
            expand: true,
            src: ['manifest.json'],
            dest: 'build/'
        }, {
            expand: true,
            src: ['secret.js'],
            dest: 'build/'
        }]
    }
}