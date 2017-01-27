
var application = angular.module('myAppControllerCitizen', [
    'ngInputDate'
]);

application.controller('myControllerCitizen', function($scope, $http) {
        
//hacer que este actulizada la fecha..
$scope.dateBirth = new Date(2016, 1, 27);

$scope.selectedProvince = null;
$scope.provinces = [];


$scope.selectedProfession = null;
$scope.professions = [];

$scope.selectedStatus = null;
$scope.status = [];


$scope.fecthAllProvinces = function() {

    $http({
            method: 'GET',
            url: 'http://localhost:3550/Province/getAllProvinces',
        }).success(function (result) {

        $scope.provinces = result;
    })
}

///carga el listado de provincias inicialmente para el dropdown.
$scope.fecthAllProvinces();


$scope.fecthAllProfessions = function() {
    
    $http({
            method: 'GET',
            url: 'http://localhost:3550/Profession/getAllProfession',
        }).success(function (result) {

        $scope.professions = result;
    })
}

///carga el listado de profesiones inicialmente para el dropdown.
$scope.fecthAllProfessions();


$scope.fecthAllStatus = function() {
    
    $http({
            method: 'GET',
            url: 'http://localhost:3550/Status/getAllStatus',
        }).success(function (result) {

        $scope.status = result;
    })
}

///carga el listado de estatus inicialmente para el dropdown.
$scope.fecthAllStatus();


$scope.addCitizen = function () {

    var citizen = {
                
        identify: $scope.user.identify,
        name: $scope.user.name,
        lastName1: $scope.user.lastNames,
        birthDate: $scope.dateBirth,
        street: $scope.user.houseNumber,
        sector: $scope.user.sector,
        idProvince: $scope.selectedTestAccount,
        idProfession: $scope.inputProfession,
        idStatus: $scope.inputStatus,
        gender: $scope.selectedGender
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
);