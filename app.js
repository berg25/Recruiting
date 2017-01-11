angular.module('lacrosse', [ui.router])
.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:'./templates/home.html',
    controller:'homeController'
  })
})
