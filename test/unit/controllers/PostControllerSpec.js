describe('PostCtrl', function(){

    beforeEach(module('bibliobabel'));

    it('initial test to see wheather karma is working and bibliobabel is instantiable', inject(function($controller) {
        var scope = {},
            ctrl = $controller('PostCtrl', {$scope:scope});

        expect(true).toBe(true);
    }));

    it('posts object should exist', inject(function($controller){
        var scope = {},
            ctrl = $controller('PostCtrl', {$scope:scope});

        expect(ctrl.posts).not.toBe(null);
    }));

});