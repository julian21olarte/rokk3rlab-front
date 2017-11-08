'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'task'
  });
}])

.controller('View1Ctrl', ['$http', function($http) {
  var vm = this;

  activate();


  function activate() {
    vm.title = "TODO-List";
    vm.today = new Date();
    vm.deleteTask = deleteTask;
    $http.get("https://rokk3rlab.herokuapp.com/task")
    .then(function(response) {
        vm.tasks = response.data.tasks;
    });
  }






  function deleteTask(id) {
    if(id) {
      $http.get(`https://rokk3rlab.herokuapp.com/task/destroy/${id}`)
      .then(function(response) {
          alert('Task deleted successfull');
          activate();
      });
    }
  }
}]);