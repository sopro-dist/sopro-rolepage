var path = require('path');

// Because we are deleting the whole material-icons folder, 
// the normal file matcher can't exclude these by !exclusion
// We will compare every file and folder scheduled for cleaning against this list:
var EXCLUDED_ICONS = [
  "material-icons/icons/system_icons/navigation/res/1x_web/ic_menu_wht_24dp.png",
  "material-icons/icons/system_icons/action/res/1x_web/ic_drawer_wht_18dp.png",
  "material-icons/icons/system_icons/content/res/1x_web/ic_add_wht_24dp.png"
];

// Check one path to see if it's OK to delete:
function deletePathOK(p){
  // Make sure that whatever path grunt delivers is normalized to the current platform:
  p = norm(p);
  if(pathIsParent(p) || pathIsExact(p)){ // parent of an exclusion, or is an exclusion
    return false;
  } else {
    return true;
  }
};

function pathIsParent(p){
  // Assume p is not a parent of x:
  var isParent = false;
  // Check each path and set isParent to true if something is a child:
  each(function(x){
    var rel1 = relPath(p, x); 
    // result could be: 'aa/bb' (grand)parent, '' same path, '../aa/bb/' non-parent
    isParent = 
      rel1.match(/^\.\./) 
      ? isParent : true;
  });
  return isParent;
}

function pathIsExact(p){ // cleaning path
  var exact = false;
  each(function(x){  // exclusion path
    exact = 
      relPath(p,x) === '' 
      ? true : exact;
  })
  return(exact);
}

function each(fn){
  EXCLUDED_ICONS.forEach(function(x){
    x = norm(x);
    fn(x);
  });
}
function norm(p){
  return path.normalize(p);
};
function relPath(from,to){
  from = norm(from);
  to = norm(to);
  return path.relative(from,to);
};


module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean:{
      icons: { // Clean task 1
        dot: true,
        src: ["material-icons/**/*"],
        filter: deletePathOK,  // see top - this skips folders with child files to exclude from deletion
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
   'clean:icons',
  ]);

};