module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        connect:
            server:
                options:
                    open: true
                    keepalive: true
                    hostname: 'localhost'
                    port: 5001
                    base: ''

    grunt.loadNpmTasks 'grunt-contrib-connect'
