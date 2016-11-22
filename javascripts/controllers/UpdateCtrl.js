"use strict";

app.controller("UpdateCtrl", function($scope, $routeParams, $location, ItemFactory){
	$scope.newTask = {};
	let itemId = $routeParams.id;

	ItemFactory.getSingleItemForEdit(itemId).then(function(oneItem){
		oneItem.id = itemId;
		$scope.newTask = oneItem;
	});	

	$scope.addNewItem = function(){
		ItemFactory.editItem($scope.newTask).then(function(response){
			$scope.newTask = {};
			$location.url("/items/list")
		})
	}
})