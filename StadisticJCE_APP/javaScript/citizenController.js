var app = angular.module("myAppControlCitizen", []);

app.controller("myControlCitizen", function ($scope, $http) {
    debugger;

      $scope.addCitizen = function () {

            var citizen = {
                
                cedula: $scope.inputIdentify,
                name: $scope.inputName,
                lastNames: $scope.inputLastNames,
                birtDate: $scope.inputBirthDate,
                street: $scope.inputNumber,
                sector: $scope.inputSector,
                province: $scope.inputProvince,
                profession: $scope.inputProfession,
                status: $scope.inputStatus,
                sex: $scope.inputSex
            }

            $http({
                method: "POST",
                url: "http://localhost:3550/Citizen/addCitizen",
                datatype: "json",
                data: JSON.stringify(citizen)
            }).then(function (response) {

                $scope.clearAllInput();
                alert(response.data);
            }) 
    }

    $scope.clearAllInput = function () {        
        $scope.inputIdentify = "";
        $scope.inputName = "";
        $scope.inputLastNames = "";
        $scope.inputBirthDate = "";
        $scope.inputNumber = "";
        $scope.inputSector ="";
        $scope.inputProvince = "";
        $scope.inputProfession = "";
        $scope.inputStatus = "";
        $scope.inputSex = "";
    }


    $scope.getCitizen = function(page, perpage) {

         $http({
                method: "GET",
                url: "http://localhost:3550/Citizen/fetchCitizens",
                datatype: "json",
                data: JSON.stringify(citizen)
            }).then(function (response) {

                $scope.clearAllInput();
                alert(response.data);
            }) 


    }

})