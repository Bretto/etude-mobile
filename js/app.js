'use strict';

angular.module('App', ['App.controllers', 'App.filters', 'App.services', 'App.directives', 'ngMobile', 'ui.compat']).
    config(function ($stateProvider, $urlRouterProvider, $routeProvider, $locationProvider, $provide) {

        $provide.decorator('$state', function ($delegate, $timeout) {

            var _transitionTo = $delegate.transitionTo;

            //Timeout to give time to the selected item to show its selected state (aesthetic consideration only)
            $delegate.transTo = function (stateName, stateParams) {
                $timeout(function () {
                    _transitionTo(stateName,stateParams);
                },0);
            };

            return $delegate;
        });

        $provide.decorator('$log', function ($delegate) {
            var _log = $delegate.log;
            var _info = $delegate.info;
            var _debug = $delegate.debug;
            var _warn = $delegate.warn;
            var _error = $delegate.error;

            $delegate.zLog = function (msg) {
                _log.apply(null, arguments)
                addLog(arguments, 'log');
            };

            $delegate.zInfo = function (msg) {
                _info.apply(null, arguments)
                addLog(arguments, 'info');
            };

            $delegate.zDebug = function (msg) {
                _debug.apply(null, arguments)
                addLog(arguments, 'debug');
            };

            $delegate.zWarn = function (msg) {
                _warn.apply(null, arguments)
                addLog(arguments, 'warn');
            };

            $delegate.zError = function (msg) {
                _error.apply(null, arguments)
                addLog(arguments, 'error');
            };

            function addLog(_arguments, type) {
                var args = Array.prototype.slice.call(_arguments);
                angular.forEach(args, function (value, key) {
                    if (angular.isObject(value)) {
                        args[key] = JSON.stringify(value);
                    }
                });

                var msg = args + '';
                $('<div/>', {
                    text: msg
                }).addClass(type).appendTo('.logger');
            }

            return $delegate;
        });

        $stateProvider

            .state('scan', {
                url: '/scan',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/produit-scan.html';
                        }
                    }
                }
            })
            //-------------------------------------------------------
            .state('panier', {
                url: '/panier',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/panier-liste.html';
                        }
                    }
                }
            })
            .state('panier.edit', {
                url: '/edit',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/panier-edit.html';
                        }
                    }
                }
            })
            .state('panier.ajouter', {

                url: '/ajouter',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/produit-ajouter-au-panier.html';
                        }
                    }
                }
            })
            .state('panier.panierId', {
                url: '/:panierId',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/panier-detail.html';
                        }
                    }
                }
            })
            .state('panier.panierId.produitId', {

                url: '/produit/:produitId',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/produit-detail.html';
                        }
                    }
                }
            })

            //-------------------------------------------------------
            .state('recherche', {
                url: '/recherche',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/recherche.html';
                        }
                    }
                }
            })
            .state('recherche.produitId', {
                url: '/produit/:produitId',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/produit-detail.html';
                        }
                    }
                }
            })
            .state('recherche.produitMoinsCher', {
                url: '/produit-moins-cher',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/produit-moins-cher.html';
                        }
                    }
                }
            })
            .state('recherche.panierMoinsCher', {
                url: '/panier-moins-cher',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/panier-moins-cher.html';
                        }
                    }
                }
            })
            .state('recherche.panierMoinsCher.panierMoinsCherId', {
                url: '/:panierMoinsCherId',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/panier-moins-cher-detail.html';
                        }
                    }
                }
            })
            .state('recherche.config', {
                url: '/config',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/recherche-config.html';
                        }
                    }
                }
            })
            .state('recherche.config.commune', {
                url: '/commune',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/recherche-commune.html';
                        }
                    }
                }
            })
            .state('recherche.historique', {
                url: '/historique',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/recherche-historique.html';
                        }
                    }
                }
            })
            .state('recherche.historique.produitId', {
                url: '/produit/:produitId',
                views: {
                    'page@': {
                        templateUrl: function (stateParams) {
                            return '/partials/produit-detail.html';
                        }
                    }
                }
            })


        $urlRouterProvider.otherwise("/panier");
    }).
    run(
    function ($rootScope, $state, $stateParams, $log) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){

            var direction = !fromParams.isBack;

            $rootScope.vewSlideAnimation = {
                enter: direction ? 'slide-left-enter' : 'slide-right-enter',
                leave: direction ? 'slide-left-leave' : 'slide-right-leave'
            }

        });
    });




// Check if a new cache is available on page load.
window.addEventListener('load', function (e) {

    window.applicationCache.addEventListener('updateready', function (e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
            // Browser downloaded a new app cache.
            // Swap it in and reload the page to get the new hotness.
            window.applicationCache.swapCache();
            if (confirm('A new version of this site is available. Load it?')) {
                window.location.reload();
            }
        } else {
            // Manifest didn't changed. Nothing new to server.
        }
    }, false);

}, false);

// fix double tap zoom on Android
(function($) {
    $.fn.nodoubletapzoom = function() {
        $(this).bind('touchstart', function preventZoom(e) {
            var t2 = e.timeStamp
                , t1 = $(this).data('lastTouch') || t2
                , dt = t2 - t1
                , fingers = e.originalEvent.touches.length;
            $(this).data('lastTouch', t2);
            if (!dt || dt > 500 || fingers > 1) return; // not double-tap

            e.preventDefault(); // double tap - prevent the zoom
            // also synthesize click events we just swallowed up
            $(this).trigger('click').trigger('click');
        });
    };
})(jQuery);





