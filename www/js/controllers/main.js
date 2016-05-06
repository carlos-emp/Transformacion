app.controller("mainController", function ($scope){
$scope.titulo="Programs";
$scope.programas=[{"nombre":"Programa1","costo":"$300"},{"nombre":"Programa2","costo":"$700"},{"nombre":"Programa3","costo":"$1300"},{"nombre":"Programa1","costo":"$300"},{"nombre":"Programa2","costo":"$700"},{"nombre":"Programa3","costo":"$1300"}];
$scope.page='pages/programs.html';
$scope.programsPage='pages/programs.html';
$scope.newProgramPage="pages/newProgram.html";


$scope.showForm= function(){
  $scope.page=$scope.newProgramPage;
  $scope.titulo="New Program";
}

});
