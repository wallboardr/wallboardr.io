/* global module:false */
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
        '/*!\n' +
        ' * Wallboardr.io <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
        ' * https://bitbucket.org/colinbate/wallboardr.io\n' +
        ' * MIT licensed\n' +
        ' *\n' +
        ' * Copyright (C) 2013 Colin Bate, https://wallboardr.io\n' +
        ' */\n'
    },
    jshint: {
      options: {
        bitwise: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        nonew: true,
        plusplus: true,
        quotmark: true,
        sub: true,
        strict: true,
        undef: true,
        unused: true,
        trailing: true,
        eqnull: true,
        browser: true,
        expr: true,
        globals: {
          define: false,
          require: false,
          module: false
        },
        ignores: ['<%= boardJsFile %>']
      },
      files: ['*.js', 'assets/js/**/*.js']
    },
    less: {
      dev: {
        options: {
          dumpLineNumbers: 'mediaquery'
        },
        files: {
          '<%= cssFile %>': 'src/less/core.less'
        }
      },
      clean: {
        files: {
          '<%= cssFile %>': 'src/less/core.less'
        }
      }
    },
    watch: {
      less: {
        files: ['src/less/*.less'],
        tasks: 'less:dev'
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    },
    stencil: {
      main: {
        options: {
          env: {
            title: "Wallboardr",
          },
          partials: "src/pages/partials",
          templates: "src/pages/templates"
        },
        files: [
          {
            expand: true,
            cwd: "src/pages/content/",
            src: "*",
            dest: "dist",
            ext: ".html"
          }
        ]
      }
    },
    cssFile: 'dist/css/core.css',
    boardJsFile: 'assets/js/boards.js',
    boardJsSrc: ['assets/lib/boards/jquery.js', 'assets/lib/boards/bigtext.js', 'assets/js/boards/base.js']
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-stencil');
  //grunt.loadNpmTasks('grunt-nodemon');
  //grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['jshint', 'less:dev', 'stencil:main']);
  grunt.registerTask('work', ['concurrent:target']);
  grunt.registerTask('prep', ['less:clean', 'jshint']);

};