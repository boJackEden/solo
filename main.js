
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

  $scope.removeItem = function(index) {
  	// console.log(index);
    $scope.jobs.$remove(index);
    var result = $scope.jobs.splice(index, 1);
    populateInputs(result[0])
    // console.log(result[0]);

  }

});

var populateInputs = function (obj){
	$('#title').val(obj.title);
	$('#compName').val(obj.company);
	$('#status').val(obj.status);
	$('#nextStep').val(obj.nextStep);
	$('#email').val(obj.email);
	$('#phone').val(obj.phone);
	$('#JD').val(obj.JD);
};





