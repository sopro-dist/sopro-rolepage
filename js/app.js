var app = angular.module("app", ["ngMaterial"]);

app.factory("menu", ['$rootScope', function ($rootScope) {
  var self;
  var filters = [{ filter: 'All', color: '#000' }, 
                 { filter: 'Vote', color: '#a48623' },
                 { filter: 'Running', color: '#458B74' },
                 { filter: 'Unstarted', color: '#D2D6DF' },
                 { filter: 'Completed', color: '#40505E' }];

  return self = {
    filters: filters,

    selectFilter: function(filter) {
      self.currentFilter = filter;
      if (filter.filter === "All") {
        $rootScope.pollFilter = undefined;
      } else if (filter.filter === "Running") {
        $rootScope.pollFilter = "started";
      } else if (filter.filter === "Completed") {
        $rootScope.pollFilter = "stopped";
      } else {
        $rootScope.pollFilter = filter.filter.toLowerCase();
      };
    },

    isFilterSelected: function (filter) {
      return self.currentFilter === filter;
    }
  };
}]);

app.directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);

app.controller("appCtrl",function ($scope, $materialSidenav, menu){

  $scope.menu = menu;
  $scope.roles = Cambrian.capi.roles.list();
  console.log($scope.roles);

  $scope.toggleMenu = function () {
    $materialSidenav('left').toggle();
  };
  
  $scope.overflowToggle = function (role) {
  	role.of = !role.of;
  };

  $scope.destroyRole = function (role) {
    console.log("hypothetical role hypothetically destroyed");
  };

});