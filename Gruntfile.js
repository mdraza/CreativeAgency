module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'css/main.min.css' : ['css/style.css', 'css/animate.css', 'css/magnific-popup.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/script.min.js' : ['js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};