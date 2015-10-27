(function(){
    'use strict';
    
    /* 
        Needed a factory service that allowed me to cleanly and neatly access
        localStorage on the machine you're using for some house keeping ordeals in my
        web application.
        This factory utilizes the JohnPapa style format for using AngularJS
        (hence the anon function and 'use strict')
        Feel free to use / modify all the code you want.
    */
    angular
        .module('__YOU__APP__NAME__HERE__')
        .factory('locStore', localStorageFactory);
    // localStorageFactory.$inject = [];
    // don't really inject anything so we can just comment it out

    function localStorageFactory(){
        var vm = this;
        vm.access = localStorage;
        vm.service = {};
        ///////////////////////////////////////////
        vm.service.add = function(name,val){
            vm.access.setItem(name,val);
            return true;
        }
        vm.service.remove = function(name){
            vm.access.removeItem(name);
            return true;
        }
        vm.service.fetch = function(name){
            return vm.access.getItem(name);
        }
        return vm.service;
    }

    
});

// Now just inject "locStore" into your controller / application
// Methods:
/*      
    locStore.add(key,val);
    locStore.remove(key);
    locStore.fetch(key);        
*/