'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'task'
  });
}])

.controller('View2Ctrl', ['$http', function($http) {
  var vm = this;

  active();




  function active() {
    vm.title = "Add Taks";
    vm.addTask = addTask;
  }



  function addTask() {
    let task = {
      name: vm.taskName,
      dueDate: Date(vm.taskDueDate),
      priority: vm.taskPriority
    };

    $http.post("https://rokk3rlab.herokuapp.com/task/create", task)
    .then(response => {
      alert('Task added successfull');
    });
  }

}]);