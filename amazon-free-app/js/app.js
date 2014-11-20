'use scrict';

var amazonServices = angular.module('amazonServices', []);

amazonServices.factory('FreeApp', ['$http', '$log', function ($http, $log) {
    return {
        getFreeApp: function() {
            return $http.get('http://api.skylark95.com/amazon/freeApp/');
        }
    }
}]);

var amazonFreeApp = angular.module('amazonFreeApp', ['amazonServices']);

amazonFreeApp.controller('AppDetailsCtrl', ['$scope', 'FreeApp', function ($scope, FreeApp) {
    FreeApp.getFreeApp()
    .success(function(data) {
        $scope.app = data.freeApp;
    }).error(function(data, status) {
        $log.error('Failed to retrieve data, received ' + status);
        $log.debug(data);
    });
    $scope.buy = function () {
        window.location = $scope.app.url;
    };
}]);
