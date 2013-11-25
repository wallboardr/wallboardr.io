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
        }
      },
      files: ['src/js/**/*.js']
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
        files: ['src/less/**/*.less'],
        tasks: 'less:dev'
      },
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      pages: {
        files: ['src/pages/**/*'],
        tasks: ['stencil:main']
      }
    },
    stencil: {
      main: {
        options: {
          env: {
            title: "Wallboardr"
          },
          partials: "src/pages/partials",
          templates: "src/pages/templates",
          template_map: [
            {
              match: "src/pages/content/*.md",
              template: "layout.dot.html"
            }
          ]
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
    copy: {
      main: {
        files: [
          {
            src: ['**'],
            dest: 'dist',
            cwd: 'src/files/',
            expand: true
          }
        ]
      }
    },
    clean: {
      main: [
        'dist/**/*',
        '!dist'
      ]
    },
    rsync: {
      options: {
        args: ["--verbose", "-az"]
      },
      local: {
        options: {
          src: "dist/",
          dest: "/web/clients/wallboardr",
          syncDestIgnoreExcl: true
        }
      },
      live: {
        options: {
          src: "dist/",
          dest: "/var/www",
          host: "root@wallboardr.io",
          ssh: true,
          syncDestIgnoreExcl: true
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8001,
          base: 'dist',
          keepalive: true
        }
      }
    },
    cssFile: 'dist/css/core.css',
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  //grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-stencil');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-rsync');

  grunt.registerTask('default', ['jshint', 'less:dev', 'stencil:main', 'copy:main']);
  grunt.registerTask('pack', ['clean', 'jshint', 'less:clean', 'stencil:main', 'copy:main']);
  grunt.registerTask('deploy', ['pack', 'rsync:live']);


};