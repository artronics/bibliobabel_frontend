'use strict';

var bibliobabel = angular.module("bibliobabel", [
    'angularMoment',
    'ui.router'
]);

bibliobabel.controller("MainCtrl", [function() {
    var self = this;
}]);

bibliobabel.controller("PostCtrl",['$scope', function($scope) {
    var self= this;

    $scope.kir="kos";
    self.foo="bar";
    self.posts = post;
    self.comments= comments;
}]);

