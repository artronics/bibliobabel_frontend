module.exports = function(config){
  config.set({

    basePath : './',

    files : [
        'wwwroot/js/angular.js',
        'wwwroot/js/angular-route.js',
        'wwwroot/js/angular-mocks.js',
        'wwwroot/js/angular-moment.js',
        'app/components/**/*.js',
        'app/view*/**/*.js',
        'test/unit/**/',
        'app/*.js',
        'wwwroot/data/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
