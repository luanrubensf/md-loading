import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-promise-tracker';

import './md-loading.css';

import mdLoading from './md-loading.directive';

const MODULE_NAME = 'md-loading';

angular.module(MODULE_NAME, [
    ngMaterial,
    'ajoslin.promise-tracker',
])
    .directive('mdLoading', () => new mdLoading);

export default MODULE_NAME;