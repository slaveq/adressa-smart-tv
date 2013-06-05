module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["build/"],
        requirejs: {
            compile: {
                options: {
                    baseUrl: "scripts",
                    name: "app",
                    mainConfigFile: "scripts/app.js",
                    out: "build/script.js"
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, src: ['./config.xml', './widget.info'], dest: 'build/', filter: 'isFile'}, // includes files in path
                    {expand: true, src: ['mocks/**'], dest: 'build/'}, // includes files in path and its subdirs
                    {expand: true, src: ['scripts/libs/**'], dest: 'build/'}, // includes files in path and its subdirs
                    {expand: true, src: ['css/**.css'], dest: 'build/'}, // includes files in path and its subdirs
                    {expand: true, src: ['images/**'], dest: 'build/'} // includes files in path and its subdirs
                ]
            }
        },
        targethtml: {
            dist: {
                files: {
                    'build/index.html': 'index.html'
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'build/archive.zip'
                },
                files: [
                    {expand: true, cwd: 'build/', src: ['**'], dest: ''} // includes files in path
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-targethtml');

//    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'copy', 'compress']);
    grunt.registerTask('default', ['clean', 'requirejs', 'copy', 'targethtml:dist', 'compress']);

};