var app=angular.module("myMod");


app.config(function($routeProvider, $locationProvider){
    $routeProvider.when("/animals", {
      controller:"myController",
      templateUrl:"animals.html"
   })
   .when("/images/elephant", {
     controller:"myController",
     templateUrl:"images/elephant.html"
  })
  .when("/images/lion", {
    controller:"myController",
    templateUrl:"images/lion.html"
 })
 .when("/images/cow", {
   controller:"myController",
   templateUrl:"images/cow.html"
})
.when("/images/giraffe", {
  controller:"myController",
  templateUrl:"images/giraffe.html"
})
.when("/images/bear", {
  controller:"myController",
  templateUrl:"images/bear.html"
})
.when("/images/goat", {
  controller:"myController",
  templateUrl:"images/goat.html"
})
.when("/images/camel", {
  controller:"myController",
  templateUrl:"images/camel.html"
})
.when("/images/horse", {
  controller:"myController",
  templateUrl:"images/horse.html"
})
.when("/images/panther", {
  controller:"myController",
  templateUrl:"images/panther.html"
})
.when("/images/tiger", {
  controller:"myController",
  templateUrl:"images/tiger.html"
})


   $locationProvider.hashPrefix("");

});
