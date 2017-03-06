var app=angular.module("myMod");

app.controller("myController", function($scope, $http){
  $http({
    method:"GET",
    url:"/animals"
  })
  .then(function successfulCallback(response){
    console.log(response.data);
    $scope.animals=response.data;
  });

});
