"use strict";

app.controller("ItemListCtrl", function($scope, ItemFactory){

	$scope.items = [];

	let getItems = function(){
		ItemFactory.getItemList().then(function(fbItems) {
			$scope.items = fbItems;
		});
	}

	getItems();

	$scope.deleteItem = function(itemId){
		console.log("clicked");
		ItemFactory.deleteItem(itemId).then(function(response){
			getItems();
		});
	};
})