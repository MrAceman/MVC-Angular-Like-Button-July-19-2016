import angular from 'angular';

// Import all controllers

import {MainController} from './controllers/main.controller';

angular
  .module('app', []) // Register the module (DO THIS FIRST)
  .controller('MainController', MainController); // Register controller ('Name to name it', Function of controller)
