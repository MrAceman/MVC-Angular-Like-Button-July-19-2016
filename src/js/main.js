import angular from 'angular';

// Import all controllers

import {MainController} from './controllers/main.controller';

angular
  .module('app', []) // Register the module (DO THIS FIRST)
  .controller('MainController', MainController)

  // Register controller ('Name to name it', Dependency Injected Function of controller...
  // ... can be an imported function from another controller OR immediate function)

//   .controller.('WrapperController', ['$scope', function ($scope) {
//   $scope.text = 'Wrapper Text';
// }]);
