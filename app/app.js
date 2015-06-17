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
    console.log(self.posts[0].comment.comments.length);
    console.log(self.posts[0].comment.count);
    //self.comments= comments;
}]);

