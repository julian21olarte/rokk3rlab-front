(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('tasksFactory', tasksFactory);

    tasksFactory.$inject = ['$http'];
    function tasksFactory($http) {
        var service = {
            getTasks:getTasks
        };
        
        return service;

        ////////////////
        function getTasks() { 
            $http.get("https://rokk3rlab.herokuapp.com/task")
            .then(function(response) {
                return response.data.tasks;
            });
        }
    }
})();