/*
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


*/

function startClock(){
	Cookies.remove('outtatime'); // for timer to start again this line has to be commented
	if (!Cookies.get('outtatime')){
		if ( !Cookies.get('stopclock') ){
				Cookies.set("stopclock",moment().add(1, 'm').add(1,'s'));
				$('#timerSpace').text(moment( moment(Cookies.get('stopclock')) - moment() ).format('m:ss') );
			}

		if ( Cookies.get('stopclock') )
			setInterval(function(){
				if (moment() > moment(Cookies.get('stopclock'))){
						$('#timerSpace').text('TIME IS OUT'); 
						Cookies.remove('stopclock'); Cookies.set('outtatime',1);
					}
				else
					$('#timerSpace').text(moment( moment(Cookies.get('stopclock')) - moment() ).format('m:ss') );
			}, 1000);
	}
}

function doSetQuestion(number){
	$('.questionNumber').html(number+1);
	$('.question').html(myQuestions[number].questionText);
	$('.firstAnswer').html(myQuestions[number].firstAnswer);
	$('.secondAnswer').html(myQuestions[number].secondAnswer);
	$('.thirdAnswer').html(myQuestions[number].thirdAnswer);
	$('.fourthAnswer').html(myQuestions[number].fourthAnswer);
}

var myQuestions = [{
    "questionText": "Question 1",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 2",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 3",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 4",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 5",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 6",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 7",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 8",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 9",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 10",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 11",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 12",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 13",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 14",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 15",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 16",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 17",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 18",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 19",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 20",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 21",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 22",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 23",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 24",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 25",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 26",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 27",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 28",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 29",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 30",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
	"questionText": "Question 31",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 32",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 33",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 34",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 35",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	},
	{
    "questionText": "Question 36",
    "firstAnswer": 	"A",
    "secondAnswer": "B",
	"thirdAnswer":	"C",
	"fourthAnswer":	"D",
	"correctAnswer":"A"
	}];
	
function doButtons(){
	$('.questionsPool').html('');
	for (x=0;x<=35;x++)
		$('.questionsPool').append('<button class="questionButton" onclick="doSetQuestion('+x+')">'+(x+1)+'</button>');
}