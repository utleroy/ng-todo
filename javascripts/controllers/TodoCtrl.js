"use strict";

app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "ksdhfglkfds";
	$scope.showListView = true;
	$scope.newTask = {};
	$scope.items = [
	{
		id:0,
		task:"mow the lawn",
		isCompleted:true,
		assignedTo:"Lee"
	},
	{
		id:0,
		task:"go home",
		isCompleted:false,
		assignedTo:"leroy"
	},
	{
		id:0,
		task:"code",
		isCompleted:false,
		assignedTo:"jimmy"

	}
	];

	$scope.allItems=function(){
	$scope.showListView = true;
};
$scope.newItem=function(){
	$scope.showListView = false;	

};

$scope.addNewItem = function(){
	$scope.newTask.isCompleted = false;
	$scope.newTask.id = $scope.items.length;
	console.log("new task in function", $scope.newTask);
	$scope.items.push($scope.newTask);
	$scope.newTask = {};
	$scope.showListView = true;
};











});