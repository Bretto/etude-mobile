'use strict';
var controllers = angular.module('App.controllers', []);

controllers.controller('AppCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $window, $state, $stateParams) {
    $log.zLog('AppCtrl');

    $scope.dataModel = DataModel;


    $scope.onPriNavClick = function (page) {
        $scope.currentPage = page;
    }

    $scope.onBack = function () {
        $state.params.isBack = true;
        $window.history.back();
    }
});


controllers.controller('PrimaryNavCtrl', function ($scope, $rootScope, $routeParams, $timeout, $log, $http, DataModel, $location, $state) {
    $log.zLog('PriNavCtrl');

    $scope.dataModel = DataModel;


    $scope.onScan = function () {
        $state.transitionTo('scan');
    }

    $scope.onPanier = function () {
        $state.transitionTo('panier');
    }

    $scope.onRecherche = function () {
        $state.transitionTo('recherche');
    }

});


controllers.controller('PanierListeCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('PanierListeCtrl');

    var panierListe = [];

    for (var i = 0; i < 20; i++) {
        var panier = {name: 'Panier ' + (i + 1), id: (i + 1)};
        panierListe.push(panier);
    }

    $scope.panierListe = panierListe;

    $scope.onSelectPanier = function (panier) {
        $log.zLog('onSelectPanier');

        if ($scope.originalPanier) $scope.originalPanier.isActive = false;
        $scope.originalPanier = panier;
        panier.isActive = true;
        $scope.currentPanier = angular.copy(panier);

        var stateParams = angular.extend({ panierId: panier.id }, $stateParams);
        $state.transTo('panier.panierId', stateParams);

    }

    $scope.onPanierEdit = function () {
        $state.transitionTo('panier.edit');
    }

    $scope.onPanierAdd = function () {
//      $state.transitionTo('panier.panierId');
    }

});


controllers.controller('PanierDetailCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('PanierDetailCtrl');

    var produitListe = [];

    for (var i = 0; i < 20; i++) {
        var produit = {name: 'Produit ' + (i + 1), id: (i + 1), cnt: Math.round(Math.random() * 10)};
        produitListe.push(produit);
    }

    $scope.produitListe = produitListe;

    $scope.onSelectProduit = function (produit) {
        $log.zLog('onSelectProduit');

        if ($scope.originalProduit) $scope.originalProduit.isActive = false;
        $scope.originalProduit = produit;
        produit.isActive = true;
        $scope.currentProduit = angular.copy(produit);


        var stateParams = angular.extend({produitId: produit.id}, $stateParams);
        $state.transTo('panier.panierId.produitId', stateParams);

    }

    $scope.onPanierMoinsCher = function(){
        $state.transitionTo('recherche.panierMoinsCher');
    }

});

controllers.controller('ProduitDetailCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('ProduitDetailCtrl');

    $scope.onRechercheConfig = function () {
        $state.transitionTo('recherche.config');
    }

    $scope.onAjouterAuPanier = function () {
        $state.transitionTo('panier.ajouter', $stateParams);
    }

    $scope.onProduitMoinsCher = function () {
        $state.transitionTo('recherche.produitMoinsCher', $stateParams);
    }

    $scope.produitCnt = 0;

    $scope.onMin = function () {
        if ($scope.produitCnt - 1 >= 0)
            $scope.produitCnt -= 1;
    }

    $scope.onAdd = function () {
        $scope.produitCnt += 1;
    }
});

controllers.controller('RechercheCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('RechercheCtrl');

    $scope.onHistorique = function () {
        $state.transitionTo('recherche.historique');
    }

    $scope.onRechercheConfig = function () {
        $state.transitionTo('recherche.config');
    }

    var produitListe = [];

    for (var i = 0; i < 20; i++) {
        var produit = {name: 'Produit ' + (i + 1), id: (i + 1)};
        produitListe.push(produit);
    }

    $scope.produitListe = produitListe;

    $scope.onSelectProduit = function (produit) {
        $log.zLog('onSelectProduit');

        if ($scope.originalProduit) $scope.originalProduit.isActive = false;
        $scope.originalProduit = produit;
        produit.isActive = true;
        $scope.currentProduit = angular.copy(produit);

        var stateParams = angular.extend({produitId: produit.id}, $stateParams);
        $state.transTo('recherche.produitId', stateParams);

    }

});

controllers.controller('RechercheHistoriqueCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('RechercheHistoriqueCtrl');

    var produitListe = [];

    for (var i = 0; i < 20; i++) {
        var produit = {name: 'Produit ' + (i + 1), id: (i + 1)};
        produitListe.push(produit);
    }

    $scope.produitListe = produitListe;

    $scope.onSelectProduit = function (produit) {
        $log.zLog('onSelectProduit');

        if ($scope.originalProduit) $scope.originalProduit.isActive = false;
        $scope.originalProduit = produit;
        produit.isActive = true;
        $scope.currentProduit = angular.copy(produit);

        var stateParams = angular.extend({produitId: produit.id}, $stateParams);
        $state.transTo('recherche.historique.produitId', stateParams);
    }
});

controllers.controller('ProduitAjouterAuPanierCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('ProduitAjouterAuPanierCtrl');

    var panierListe = [];

    for (var i = 0; i < 20; i++) {
        var panier = {name: 'Panier ' + (i + 1), id: (i + 1)};
        panierListe.push(panier);
    }

    $scope.panierListe = panierListe;

    $scope.onSelectPanier = function (panier) {
        $log.zLog('onSelectPanier');

        $scope.originalPanier = panier;
        panier.isActive = !panier.isActive;
        $scope.currentPanier = angular.copy(panier);
    }

    $scope.onAjouterAuPanier = function () {
        $state.transitionTo('panier', $stateParams);
    }

});

controllers.controller('RechercheConfigCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams, $location) {
    $log.zLog('RechercheConfigCtrl');

    $log.zLog('CommuneId:', $stateParams.communeId);

    $scope.findRayon = 25;

    $scope.onSelectCommune = function () {
        $state.transTo('recherche.config.commune', $stateParams);
    }
});


controllers.controller('RechercheCommuneCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams, $window, $location) {
    $log.zLog('CommuneListeCtrl');

    var communeListe = [];

    for (var i = 0; i < 20; i++) {
        var commune = {name: 'Commune ' + (i + 1), id: (i + 1)};
        communeListe.push(commune);
    }

    $scope.communeListe = communeListe;

    $scope.onSelectCommune = function (commune) {
        $log.zLog('onSelectCommune');

        if ($scope.originalCommune) $scope.originalCommune.isActive = false;
        $scope.originalCommune = commune;
        commune.isActive = true;
        $scope.currentCommune = angular.copy(commune);

        //Timeout to give time to the selected item to show its selected state (aesthetic consideration only)
        $timeout(function () {
            $state.params.isBack = true;
            $window.history.back();
        }, 0);

    }

});


controllers.controller('ProduitMoinsCherCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('ProduitMoinsCherCtrl');

    var produitMoinsCherListe = [];

    for (var i = 0; i < 20; i++) {
        var produitMoinsCher = {
            id: (i + 1),
            name: 'Produit ' + (i + 1),
            shop: 'Supermarché ' + (i + 1),
            price: Math.round(Math.random() * 1000) + 'cfp'
        };

        produitMoinsCherListe.push(produitMoinsCher);
    }

    $scope.produitMoinsCherListe = produitMoinsCherListe;
});

controllers.controller('PanierMoinsCherCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('PanierMoinsCherCtrl');

    var panierMoinsCherListe = [];

    for (var i = 0; i < 20; i++) {
        var panierMoinsCher = {
            id: (i + 1),
            name: 'Produit ' + (i + 1),
            shop: 'Supermarché ' + (i + 1),
            price: Math.round(Math.random() * 10000) + 'cfp'
        };

        panierMoinsCherListe.push(panierMoinsCher);
    }

    $scope.panierMoinsCherListe = panierMoinsCherListe;

    $scope.onSelectPanierMoinsCher = function (panierMoinsCher) {
        $log.zLog('onSelectPanierMoinsCher');

        if ($scope.originalPanierMoinsCher) $scope.originalPanierMoinsCher.isActive = false;
        $scope.originalPanierMoinsCher = panierMoinsCher;
        panierMoinsCher.isActive = !panierMoinsCher.isActive;
        $scope.currentPanierMoinsCher = angular.copy(panierMoinsCher);

        var stateParams = angular.extend({panierMoinsCherId: panierMoinsCher.id}, $stateParams);
        $state.transTo('recherche.panierMoinsCher.panierMoinsCherId', stateParams);
    }
});


controllers.controller('PanierMoinsCherDetailCtrl', function ($scope, $rootScope, $timeout, $log, $http, DataModel, $state, $stateParams) {
    $log.zLog('PanierMoinsCherDetailCtrl');

    var produitMoinsCherListe = [];

    for (var i = 0; i < 20; i++) {
        var produitMoinsCher = {
            id: (i + 1),
            name: 'Produit ' + (i + 1),
            cnt:  Math.round(Math.random() * 10),
            uPrice: Math.round(Math.random() * 100),
            tPrice: Math.round(Math.random() * 1000) + 'cfp'
        };

        produitMoinsCherListe.push(produitMoinsCher);
    }

    $scope.tTotal = Math.round(Math.random() * 10000) + 'cfp';

    $scope.produitMoinsCherListe = produitMoinsCherListe;


});








