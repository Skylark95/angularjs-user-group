'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ui.bootstrap'])
    .directive('showErrors', function () {
        return {
            restrict: 'A',
            require: '^form',
            link: function (scope, el, attrs, formCtrl) {
                // find the text box element, which has the 'name' attribute
                var inputEl = el[0].querySelector("[name]");
                // convert the native text box element to an angular element
                var inputNgEl = angular.element(inputEl);
                // get the name on the text box so we know the property to check
                // on the form controller
                var inputName = inputNgEl.attr('name');

                // only apply the has-error class after the user leaves the text box
                inputNgEl.bind('blur', function () {
                    el.toggleClass('has-error', formCtrl[inputName].$invalid);
                });
                inputNgEl.bind('focus', function () {
                    el.removeClass('has-error');
                });
            }
        }
    })
    .controller('MemberFormCtrl', function ($scope) {
        $scope.skill = 0;
        $scope.headerText = 'Please enter your information below.';
        $scope.time = new Date('1970-01-02T00:00:00Z');
        $scope.dayOptions = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wendesday',
    'Thursday',
    'Friday',
    'Saturday'
];

        $scope.submit = function () {
            $scope.headerText = 'Welcome to your profile.  To edit your information, click edit.';
            $scope.lockForm = true;
        };

        $scope.edit = function () {
            $scope.headerText = 'Please enter your information below.'
            $scope.lockForm = false;
        }
    });
