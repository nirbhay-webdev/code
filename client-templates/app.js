var app = angular.module('blitz',[]);


app.controller('blitzClient',['$scope','chatService',function($scope,chatService){

  $scope.init = function (){

  };
  $scope.chat = [];
  $scope.chatText = { value: ''};

  $scope.sendText = function(){
    $scope.chat.push($scope.chatText.value);
    chatService.sendChat($scope.chatText);

  };
}]);

app.service('chatService',function($http){
this.sendChat = function (chatText){
  var baseUrl = 'http://localhost:3000';
  var requestObject = {
        async: true,
        crossdomain :true,
        method:'POST',
        url:baseUrl,
        headers:{
                  'Content-Type':'application/json'
                },
        data:{ "chatText": chatText.value }
    };
    $http(requestObject).then(function(response){ console.log('success',response); chatText.value = response.data;},function(response){ console.log('failure');});
  }
});
