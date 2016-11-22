"use strict";

app.controller("EditCtrl", function($scope, $routeParams, ItemFactory){
	$scope.selectedItem = {};
	let itemId = $routeParams.id;
	ItemFactory.getSingleItemForEdit(itemId).then(function(oneItem){
		oneItem.id = itemId;
		$scope.selectedItem = oneItem;
	});
});
