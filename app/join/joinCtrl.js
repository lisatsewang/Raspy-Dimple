/**
 *  Join Controller:
 *
 *  This controller handles aspects of the join view, when a player on a mobile device
 *  wants to join an existing game. There are two things that this controller looks
 *  for:
 *
 *  1. The Game ID: this will look for the game in Firebase's DB server, attach the
 *     player to this game and return the game object from the server.
 *     TODO: Check whether or not the game already exists in the server. Right now,
 *     this creates a new game instance if it doesn't already exist. We should show 
 *     an error.
 *  2. The player's name: This adds a player to the game. All players are given a unique
 *     ID, but (TODO) we should probably check if the player's name is already in the game
 *     to avoid player confusion.
 */

angular.module("App")
.controller("joinCtrl", function($scope, $state, fireBaseFactory){
  // This object will hold two models that are associated with the join.html page.
  // $scope.join.code = the game code that the player wants to join.
  // $scope.join.name = the player's name.
  $scope.join = {};

  // This function is called when the "GO!" button is clicked in the join view.
  // First, we call the joinGame() method from the fireBaseFactory and pass
  // game ID and player's name.
  // 
  // Once this is done, we redirect player to the question page, using $state.
  $scope.go = function() {
    // console.log($scope.join.code + ' & ' + $scope.join.name);
    fireBaseFactory.joinGame($scope.join.code, $scope.join.name);
    $state.go('question_player'); 
  }

});