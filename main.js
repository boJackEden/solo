var app = angular.module("GetAJob", ["firebase"]);
app.controller("jobController", function($scope, $firebaseArray, $firebaseAuth) {
  var ref = new Firebase("https://followup.firebaseio.com/");

  $scope.jobs = $firebaseArray(ref);
 	

  $scope.addJob = function() {
    $scope.jobs.$add({
      title: $scope.newJob.title,
      company: $scope.newJob.company,
      status: $scope.newJob.status, 
      nextStep: $scope.newJob.nextStep,
      email: $scope.newJob.email,
      phone: $scope.newJob.phone,
      JD: $scope.newJob.JD
    });
  };

});

var d = new Date(year, month, day, hours, minutes);

$('#timeStamp').append('I rock');