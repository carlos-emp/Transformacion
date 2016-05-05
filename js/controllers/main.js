app.controller("mainController", function ($scope){
$scope.titulo="Programs";
$scope.programas=[{"nombre":"Programa1","costo":"$300"},{"nombre":"Programa2","costo":"$700"},{"nombre":"Programa3","costo":"$1300"},{"nombre":"Programa1","costo":"$300"},{"nombre":"Programa2","costo":"$700"},{"nombre":"Programa3","costo":"$1300"}];
$scope.page='pages/programs.html';

$scope.showForm= function(){
  $scope.page='pages/newProgram.html';
  $scope.titulo="Create Program";
}

});
