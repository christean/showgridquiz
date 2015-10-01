var app = angular.module('MyApp', []);
app.controller('questionController', function($scope) {
  //objeto pregunta
  $scope.question = {
    id: 1,
    sentence: 'What type of Framework is AngularJS?',
    answers: [{
      id: 1,
      text: 'MVC',
      active: 'true'
    }, {
      id: 2,
      text: 'MVVM',
      active: 'false'
    }, {
      id: 3,
      text: 'MVR',
      active: 'false'
    }, {
      id: 4,
      text: 'MVW',
      active: 'false'
    }]
  };
  
  $scope.check = function() {
    angular.forEach($scope.question.answers, function(value, key) {
      value.active = false;
    });
    this.key.active = true;
  };

  $scope.answers = [];

  $scope.respond = function() {
    angular.forEach($scope.question.answers, function(answer, i) {
      if (answer.active)
        $scope.answers.push({
          id: $scope.id,
          key: answer.id
        });
    });
  };
  
  var range = [];
  for(var i=1;i<=36;i++) {
    range.push(i);
  }
  $scope.range = range;
});
