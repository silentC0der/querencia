app.controller ('homePage', function ($rootScope,$scope,$timeout,$sce,$window,$location) {
  $scope.submitEnquiry = function(){
      alert($scope.name+'-----'+$scope.email+'----------'+$scope.message);
  }
   
});