'use strict';

var bibliobabel = angular.module("bibliobabel", [
    'angularMoment'
]);

bibliobabel.controller("MainCtrl", [function() {
    var self = this;
}]);

bibliobabel.controller("PostCtrl",[function() {
    var self= this;

    self.posts = post;
    self.time = new Date();
}]);
