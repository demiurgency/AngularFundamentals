'use strict';

eventsApp.directive('greeting', function ($compile) {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: '@',
        name: 'ctrl'
    };
});

eventsApp.controller('GreetingController',
    function GreetingController($scope) {
        $scope.sayHello = function () {
            alert('hello');
        }
    });

    