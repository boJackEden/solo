angular.module('app', [])
//use brackets for declaration, to prevent weirdness when minifying
.controller('MainController', ['$scope', function($scope){
  $scope.jobs = [];

  $scope.addJob = function(job) {
    $scope.jobs.push(job);
    $scope.newJob = {
    	title: title,
    	company: company,
    	status: status
  };

  $scope.remove = function(index) {
    $scope.jobs.splice(index, 1);
  }
}]);
