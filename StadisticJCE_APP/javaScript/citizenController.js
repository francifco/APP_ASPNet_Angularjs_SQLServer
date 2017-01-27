
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

//obtiene todos los estatus disponiebles.
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

///Envia a la api el nuevo ciudadano.
$scope.addCitizen = function () {

    var citizen = {
                
        identify: $scope.identify,
        name: $scope.name,
        lastName: $scope.lastNames,
        birthDate: $scope.dateBirth,
        street: $scope.street,
        sector: $scope.sector,
        idProvince: $scope.selectedProvince,
        idProfession: $scope.selectedProfession,
        idStatus: $scope.selectedStatus,
        houseNumber: $scope.houseNumber,
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

    //borra cada input del form.
    $scope.clearAllInput = function () {        
        
        $scope.identify = "";
        $scope.name ="";
        $scope.lastNames ="";
        $scope.dateBirth = new Date(2016, 1, 27)
        $scope.street ="";
        $scope.sector ="";
        $scope.selectedProvince = 0;
        $scope.selectedProfession = 0;
        $scope.selectedStatus = 0;
        $scope.houseNumber ="";
        $scope.selectedGender = 0;
    }

    //Función para enviar el formulario después de toda la validación ocurrida           
    $scope.submitForm = function() {

        //compueba que el formulario es completamente válido y lo envia a la API.
        if ($scope.addCitizenForm.$valid) {        
            $scope.addCitizen();
        } else {
            alert("Favor de llenar todos los campos.");
        }
    }

     $scope.goToStadistic = function () {
        window.location =  "aqui"+ window.location.href + '/MK02';
    }

});