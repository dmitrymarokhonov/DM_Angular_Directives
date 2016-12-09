// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope){
  $scope.user = {
    name: 'Dmitry',
    address: {
      street: 'Urho Kekkosen katu 3C',
      city: 'Helsinki',
      country: 'Finland'
    },
    friends: [
      'Ivan',
      'Evgeny',
      'Ilona'
      ]
  }
});

angular.module('app').directive('userInfoCard', function(){
  return {
  
    templateUrl: "userInfoCard.html",
    restrict: "E"
  }
})
