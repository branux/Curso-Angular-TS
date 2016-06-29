/// <reference path="C:\Projetos\_temp\DemoAngularJS\DemoAngularJS.UI\Scripts/angular.js" />
(function () {
    "use strict";

    angular.module("app")
        .config(MainRoute);

    MainRoute.$inject = ['$routeProvider'];
    function MainRoute($routeProvider) {

        $routeProvider

        .when("/", {
            controller: "homeController as vm",
            templateUrl: "pages/home.html"
        })

        .when("/about", {
            controller: "aboutController as vm",
            templateUrl: "pages/about.html"
        })

        .when("/contact", {
            controller: "contactController as vm",
            templateUrl: "pages/contact.html"
        })

        .when("/erro404", {
            controller: "erroController as vm",
            templateUrl: "pages/erro.html"
        })

        .otherwise("/erro404");

    }


}());