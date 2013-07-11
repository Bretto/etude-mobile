'use strict';

var services = angular.module('App.services', []);

services.value('STATES', {
    online: true,
    lockUI: false
});

services.factory('DataModel', function ($http, $log, $rootScope, $location, STATES, $stateParams, $state) {

    var dataModel = {};

    dataModel.currentPage = {};

    dataModel.isOnline = function () {
        return STATES.online;
    }

    dataModel.isLockUI = function () {
        return STATES.lockUI;
    }

    dataModel.isPriNavActive = function (value) {
        var str =  $state.current.name;
        var index = (str.indexOf('.') > 0)? str.indexOf('.') : str.length;
        var name = $state.current.name.substring(0,index);
        return ( value === name ) ? 'active' : '';
    }

    return dataModel;
});







