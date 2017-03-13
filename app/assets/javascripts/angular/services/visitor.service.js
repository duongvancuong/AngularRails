(function(){
  'use strict'
  angular.module('myapp')
    .factory('VisitorService', VisitorService);

  VisitorService.$inject = ['$http', '$q'];
  function VisitorService($http, $q) {
    // return $resource("visitors/:id", { id: '@id' }, {
    //   index:   { method: 'GET', isArray: true, responseType: 'json' },
    //   update:  { method: 'PUT', responseType: 'json' }
    // });
    var service = {
      'getVisitors': getVisitors,
      'createVisitor': createVisitor,
      'updateVisitor': updateVisitor,
      'deleteVisitor': deleteVisitor
    };
    return service;

    function getVisitors() {
      var url = 'visitors';
      var deffered = $q.defer();
      $http.get(url)
        .then(function(response) {
          deffered.resolve(response.data);
        })
        .catch(function(response) {
          deffered.reject(response.data);
        })
        .finally(function() {
          console.log("finally finished gists");
        });
      return deffered.promise;
    }

    function createVisitor(newVisitor) {
      var url = 'visitors';
      var deffered = $q.defer();
      $http.post(url,newVisitor)
        .then(function(response) {
          deffered.resolve(response.data);
        })
        .catch(function(response) {
          deffered.reject(response.data);
        })
        .finally(function() {
          console.log("finally finished gists");
        });
      return deffered.promise;
    }

    function updateVisitor(updateVisitor, visitorId) {
      var url = 'visitors/' + visitorId;
      var deffered = $q.defer();
      $http.put(url,updateVisitor)
        .then(function(response) {
          deffered.resolve(response.data);
        })
        .catch(function(response) {
          deffered.reject(response.data);
        })
        .finally(function() {
          console.log("finally finished gists");
        });
      return deffered.promise;
    }

    function deleteVisitor(visitorId) {
      var url = 'visitors/' + visitorId;
      var deffered = $q.defer();
      $http.delete(url)
        .then(function(response) {
          deffered.resolve(response.data);
        })
        .catch(function(response) {
          deffered.reject(response.data);
        })
        .finally(function() {
          console.log("finally finished gists");
        });
      return deffered.promise;
    }
  }
})();
