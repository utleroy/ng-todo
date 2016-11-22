"use strict";

app.controller("AuthCtrl", function($scope, AuthFactory){
	$scope.loginContainer = true;
	$scope.registerContainer = false;

	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;
	};

	$scope.setRegisterContainer = function(){
		console.log("working");
		$scope.loginContainer = false;
		$scope.registerContainer = true;
	};

	$scope.registerUser = function(registerNewUser){
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			console.log("user user");
		})
	}

	$scope.loginUser = function() {
	
	};


});