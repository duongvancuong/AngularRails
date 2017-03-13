(function(){
  'use strict'
  angular.module('myapp')
    .controller('visitorsController', visitorsController);

  visitorsController.$inject = ['$scope','VisitorService', '$window'];
  function visitorsController($scope, VisitorService, $window) {
    // $scope.visitors = VisitorService.getVisitors()
    // $scope.addVisitor = function() {
    //   visitor = VisitorService.save($scope.newVisitor)

    //   $scope.visitors.push(visitor)
    //   $scope.newVisitor = {}
    // }

    // $scope.deleteVisitor = function(index) {

    //   visitor = $scope.visitors[index]
    //   VisitorService.delete(visitor)
    //   $scope.visitors.splice(index, 1);
    // }
    var vm = this;
    vm.newVisitor = {};
    vm.getAllMovies = function() {
      VisitorService.getVisitors().then(function(successData) {
        vm.visitors = successData;
      }).catch(function(errorData) {
        $window.alert(errorData);
      });
    };

    vm.deleteVisitor = function(visitorId) {
      VisitorService.deleteVisitor(visitorId).then(function(successData) {
        $window.alert('deteled Visitor successfully');
        vm.getAllMovies();
      }).catch(function(errorData) {
        $window.alert(errorData);
      });
    };

    vm.createVisitor = function() {
      VisitorService.createVisitor(vm.newVisitor)
        .then(function(successData) {
          $window.alert('created new Visitor successfully');
          vm.getAllMovies();
          vm.newVisitor = {};
        }).catch(function(errorData) {
          $window.alert('Don\'t create new Visitor');
        });
    };

    vm.updateVisitor = function() {
      VisitorService.updateVisitor(vm.updateObjectVisitor, vm.updateObjectVisitor.id)
        .then(function(successData) {
          $window.alert('updated Visitor successfully');
          vm.getAllMovies();
          vm.updateObjectVisitor = {};
          vm.btnUpdate = false;
        }).catch(function(errorData) {
          $window.alert('Don\'t update Visitor');
          vm.btnUpdate = false;
        });
    };

    vm.submitForm= function(isValid) {
      if (isValid) {
        if (vm.btnUpdate) {
          vm.updateVisitor();
        } else {
          vm.createVisitor();
        }
      }
    }

    vm.getDateUpdate = function(visitor) {
      vm.updateObjectVisitor = {};
      angular.copy(visitor, vm.updateObjectVisitor);
      vm.btnUpdate = true;
    }

    vm.getAllMovies();
  }
})();
