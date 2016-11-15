"use strict";

var app = angular.module("TodoApp", []);

app.controller("NavCtrl", function($scope) {
	$scope.navItems=[{name:"Logout"},{name:"All Items"},{name:"New Item"}];
});

app.controller("TodoCtrl", function($scope) {
	$scope.welcome = "ksdhfglkfds";
	$scope.showListView = true;
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
}
$scope.newItem=function(){
	$scope.showListView = false;	

};
});
