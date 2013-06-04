module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["build/"],
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/**/*.js'],
                dest: 'build/<%= pkg.name %>.js'
            },
            css: {
                src: 'css/*.css',
                dest: 'build/style.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['./config.xml', './widget.info', './index.html'], dest: 'build/', filter: 'isFile'}, // includes files in path
                    {expand: true, src: ['images/**'], dest: 'build/'} // includes files in path and its subdirs
                ]
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'archive.zip'
                },
                files: [
                    {src: ['build/**'], dest: '/', filter: 'isFile'} // includes files in path
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'copy', 'compress']);

};