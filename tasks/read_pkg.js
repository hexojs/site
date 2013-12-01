module.exports = function(grunt){
  grunt.registerTask('read_pkg', function(){
    var options = this.options();

    for (var i in options){
      grunt.config(i, grunt.file.readJSON(options[i]));
    }
  });
};