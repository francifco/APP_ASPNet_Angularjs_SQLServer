
var application = angular.module('myAppControllerStadistic', []);

application.controller('myControllerStadistic', function($scope, $http) {


    ///obtiene el listado de los ciudadanos.
    $scope.getCitizen = function(page, perpage) {



         $http({
                method: "GET",
                url: "http://localhost:3550/Citizen/fetchCitizens/" + page +"/"+ perpage,
                datatype: "json",
                data: JSON.stringify(citizen)
            }).then(function (response) {
                
                $scope.citizens = response.data;
            })
    }




})

