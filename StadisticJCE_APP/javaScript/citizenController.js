
var application = angular.module('myAppControllerCitizen', [
    'ngInputDate'
]);

application.controller('myControllerCitizen', ['$scope', function($scope, $http) {
        
//hacer que este actulizada la fecha..
$scope.dateBirth = new Date(2016, 1, 27);

$scope.selectedTestAccount = null;
$scope.testAccounts = ["barahona"];
/*
$scope.fecthAllProvinces = function() {
    
    $http({
            method: 'GET',
            url: 'http://localhost:3550/Province/getAllProvinces',
        }).success(function (result) {
        $scope.testAccounts = result;
    })
}

///carga el listado de provincias inicialmente para el dropdown.
$scope.fecthAllProvinces();
  */

$scope.addCitizen = function () {

          var lastNames = $scope.inputLastNames;
          
            var citizen = {
                
                identify: $scope.inputIdentify,
                name: $scope.inputName,
                lastName1: lastNames.split(' ')[0],
                lastName2: lastNames.split(' ')[1],
                birthDate: $scope.dateBirth,
                street: $scope.inputNumber,
                sector: $scope.inputSector,
                idProvince: $scope.inputProvince,
                idProfession: $scope.inputProfession,
                idStatus: $scope.inputStatus,
                idSex: $scope.inputSex
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
        $scope.inputStreet = "";
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

    //Función para enviar el formulario después de toda la validación ocurrida           
    $scope.submitForm = function() {

        //compueba que el formulario es completamente válido y lo envia a la API.
        if ($scope.addCitizenForm.$valid) {
            $scope.addCitizen();
        }
    }



        

    }
]);