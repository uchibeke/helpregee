angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    address: '1st. Columbia Street, Toronto',
    face: 'img/ben.png',
    items: [{name: "2% Skim Milk", qty: "2"}, {name: "Tomato Ketchup", qty: "1"}]
  }, {
    id: 1,
    name: 'Max Lynx',
    address: '3rd. Tom Street, Waterloo',
    face: 'img/max.png',
      items: [{name: "Soup", qty: "2"}, {name: "Tomato Ketchup", qty: "1"}]
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
