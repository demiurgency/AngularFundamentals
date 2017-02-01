'use strict';

eventsApp.directive('mySample', function($compile) {
    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br />"
        /*
        ALTERNATIVE, use link instead of template
        link: function(scope, element, attrs, controller) {
            var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br />";
            angular.element(element).html($compile(markup)(scope));
        
        }
        */
    };
});