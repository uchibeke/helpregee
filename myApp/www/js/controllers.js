angular.module('starter.controllers', []).controller('DashCtrl', function($scope) {
}).controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
	
	(function(u, s, e, b, t, n) {
		u['__bttnio'] = b;
		u[b] = u[b] ||
		function() {
			(u[b].q = u[b].q || []).push(arguments)
		};
		t = s.createElement(e);
		n = s.getElementsByTagName(e)[0];
		t.async = 1;
		t.src = 'https://web.btncdn.com/v1/button.js';
		n.parentNode.insertBefore(t, n)
	})(window, document, 'script', 'bttnio');
}).controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
	
	
	(function(u, s, e, b, t, n) {
		u['__bttnio'] = b;
		u[b] = u[b] ||
		function() {
			(u[b].q = u[b].q || []).push(arguments)
		};
		t = s.createElement(e);
		n = s.getElementsByTagName(e)[0];
		t.async = 1;
		t.src = 'https://web.btncdn.com/v1/button.js';
		n.parentNode.insertBefore(t, n)
	})(window, document, 'script', 'bttnio');
	
}).controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends : true
	};
	window.ButtonWebConfig = {
		applicationId : 'app-51164781c2a5bd9e'
	};
	
	(function(u, s, e, b, t, n) {
		u['__bttnio'] = b;
		u[b] = u[b] ||
		function() {
			(u[b].q = u[b].q || []).push(arguments)
		};
		t = s.createElement(e);
		n = s.getElementsByTagName(e)[0];
		t.async = 1;
		t.src = 'https://web.btncdn.com/v1/button.js';
		n.parentNode.insertBefore(t, n)
	})(window, document, 'script', 'bttnio');
	
});
