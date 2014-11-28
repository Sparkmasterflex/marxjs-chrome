module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    coffee:
      compileBare:
        options:
          bare: true
        files:
          'javascripts/marx.js': 'javascripts/marx.coffee'

    sass:
      dist:
        files: [
          expand: true
          cwd: "stylesheets"
          src: ["**/*.scss"]
          dest: "stylesheets"
          ext: ".css"
        ]

    watch:
      css:
        files: ["stylesheets/*.scss"]
        tasks: "sass"
        options:
          spawn: false

      coffee:
        files: ["javascripts/*.coffee"]
        tasks: "coffee"


  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-sass"
  grunt.loadNpmTasks "grunt-contrib-coffee"

  # 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask "default", ["coffee", "sass", "watch"]