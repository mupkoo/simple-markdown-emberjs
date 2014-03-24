module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        connect:
            server:
                options:
                    keepalive: true
                    hostname: 'localhost'
                    port: 5000
                    base: ''

    grunt.loadNpmTasks 'grunt-contrib-connect'
