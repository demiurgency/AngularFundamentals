'use strict';

eventsApp.directive('sampleNavbar', function($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/sample/directives/SampleNavbar.html'
    };
});