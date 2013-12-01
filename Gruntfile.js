module.exports = function(grunt){
  grunt.initConfig({
    gitclone: {
      hexo: {
        options: {
          repository: 'https://github.com/tommy351/hexo.git',
          branch: 'dev',
          directory: 'tmp/hexo'
        }
      },
      warehouse: {
        options: {
          repository: 'https://github.com/tommy351/warehouse.git',
          branch: 'develop',
          directory: 'tmp/warehouse'
        }
      }
    },
    read_pkg: {
      options: {
        hexo: 'tmp/hexo/package.json',
        warehouse: 'tmp/warehouse/package.json'
      }
    },
    yuidoc: {
      hexo: {
        name: '<%= hexo.name %>',
        description: '<%= hexo.description %>',
        version: '<%= hexo.version %>',
        options: {
          paths: [
            'tmp/hexo/lib/core',
            'tmp/hexo/lib/error',
            'tmp/hexo/lib/extend',
            'tmp/hexo/lib/logger',
            'tmp/hexo/lib/model',
            'tmp/hexo/lib/post',
            'tmp/hexo/lib/util'
          ],
          outdir: 'tmp/hexo-out'
        }
      },
      warehouse: {
        name: '<%= warehouse.name %>',
        description: '<%= warehouse.description %>',
        version: '<%= warehouse.version %>',
        options: {
          paths: 'tmp/warehouse/lib',
          outdir: 'tmp/warehouse-out'
        }
      }
    },
    copy: {
      hexo: {
        src: 'tmp/hexo-out/data.json',
        dest: 'source/_yuidoc/index.json'
      },
      warehouse: {
        src: 'tmp/warehouse-out/data.json',
        dest: 'source/_yuidoc/warehouse.json'
      },
    },
    clean: {
      tmp: ['tmp'],
      yuidoc: ['source/_yuidoc']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['gitclone', 'read_pkg', 'yuidoc', 'copy', 'clean:tmp']);
};