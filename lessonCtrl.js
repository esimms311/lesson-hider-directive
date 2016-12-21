angular.module('directivePractice').controller('lessonCtrl', function($scope){

$scope.lessons = [
  'services',
  'routing',
  'directives',
  'review',
  'firebase',
  'no server project',
  'node',
  'express',
  'mongo'
];


$scope.announceDay = function(lesson, day){
  if(!day) {
    alert(lesson + ' is not on the schedule for this week.');
  }
  else if (day === true){
    alert(lesson + ' is active on ' + day + '.');
  }

}

});
