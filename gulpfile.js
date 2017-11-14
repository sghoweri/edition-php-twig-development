const gulp = require('gulp');
const patternlab = require('@bolt/build-patternlab');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

gulp.task('patternlab:compile', patternlab.compile({
  // configFile: 'config/config.yml',
  patternLab: {
    enabled: true,
    configFile: 'config/config.yml',
    twigNamespaces: {
      addToDrupalThemeFile: true,
      sets: [
        {
          namespace: 'bolt',
          paths: [
            'source/_patterns'
          ]
        }
      ]
    },
  },
}));

// module.exports = {
  
  
  
//   browserSync: {
//     enabled: true,
//     serverName: 'bolt-server'
//   }
// };



gulp.task('patternlab:server', function () {
  connect.server({
    base: './'
  }, function _connected_callback() {
    console.log("PHP Development Server Connected.");
  });
});