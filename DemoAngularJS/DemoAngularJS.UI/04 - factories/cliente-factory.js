/// <reference path="C:\Projetos\_temp\DemoAngularJS\DemoAngularJS.UI\Scripts/angular.js" />

(function () {
    "use strict";

    angular
        .module("app")
        .factory("clienteFactory", ClienteFactory);

    ClienteFactory.$inject = ["$http"];
    function ClienteFactory($http) {

        var config = { url: "http://localhost:29974/api/clientes", token: "" };

        return {
            obterTodos: obterTodos,
            inserir: inserir,
            atualizar: atualizar,
            excluir: excluir
        }

        function obterTodos() {
            return $http.get(config.url);
        }

        function inserir(cliente) {
            return $http.post(config.url, cliente);
        }

        function atualizar(cliente) {
            return $http.put(config.url + "/" + cliente.id, cliente);
        }

        function excluir(id) {
            return $http.delete(config.url + "/" + id);
        }
    }


}());