var gulp = require('gulp'), 
sass = require('gulp-sass') 
notify = require("gulp-notify") 
bower = require('gulp-bower')
copy = require("gulp-copy");


var config = {
     sassPath: "./styles",
     bowerDir: "./bower_components" ,
    wwwroot: "./wwwroot"
}


gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});

gulp.task('copy-fonts', function() { 
    return gulp.src([config.bowerDir + '/font-awesome/fonts/**.*',
                     config.bowerDir + '/bootstrap/dist/fonts/**.*']) 
    .pipe(gulp.dest(config.wwwroot +'/fonts')); 
});

gulp.task('css', function() {
    return gulp.src(config.sassPath + '/style.scss')
        .pipe(sass({
            includePaths: [config.bowerDir + 'bootstrap-sass-official/assets/stylesheets'],
        }))
        .pipe(gulp.dest(config.wwwroot + '/css'));
});



gulp.task('copy-css', function() { 
    return gulp.src([config.bowerDir + "/bootstrap/dist/css/bootstrap.css",
        config.bowerDir + "/bootstrap/dist/css/bootstrap-theme.css",
        config.bowerDir + "/font-awesome/css/font-awesome.css",
        config.bowerDir + "/font-awesome/css/font-awesome.css.map",
    ])
        .pipe(gulp.dest(config.wwwroot + "/css")); 
});

gulp.task('copy-js', function() { 
    return gulp.src([
        config.bowerDir + "/bootstrap/dist/js/bootstrap.js",
        config.bowerDir + "/jquery/jquery.js",
        config.bowerDir + "/angular/angular.js",
        config.bowerDir + "/angular/angular.min.js.map",
        config.bowerDir + "/moment/min/moment.min.js",
        config.bowerDir + "/angular-moment/angular-moment.js",
        config.bowerDir + "/angular-moment/angular-moment.min.js.map",
        config.bowerDir + "/angular-loader/angular-loader.js",
        config.bowerDir + "/angular-loader/angular-loader.min.js.map",
        config.bowerDir + "/angular-mocks/angular-mocks.js",
        config.bowerDir + "/angular-route/angular-route.js",
        config.bowerDir + "/angular-route/angular-route.min.js.map",

    ])
        .pipe(gulp.dest(config.wwwroot + "/js")); 
});

  gulp.task('copy', ['copy-fonts', 'copy-css', 'copy-js']);
  gulp.task('default', ['bower', 'copy']);