(function () {
    "use strict";

    angular
        .module("app")
        .controller("mainController", MainCtrl);


    var config = { url: "http://localhost:29974/api/clientes", token: "" };

    MainCtrl.$inject = ["$http"];
    function MainCtrl($http) {
        var self = this;

        self.cliente = { id: "Auto", nome: "", idade: 0 };


        this.onError = function (resposta) {
            self.erro = { status: resposta.status, mensagem: resposta.statusText };
            toastr
                .error(self.erro.mensagem,
                "Erro - " + self.erro.status + " :(");
        }

        this.mensagem = function (msg) {
            toastr.success(msg, "Operação ok :)");
        }

        function obterClientes() {
            $http
            .get(config.url)
            .then(onSuccess, self.onError);

            function onSuccess(resposta) {
                self.mensagem("Dados obtidos c/ sucesso");
                self.clientes = resposta.data;;
            }
        }



        this.salvarCliente = function () {

            var json = angular.toJson(self.cliente);
            //alert(json);

            if (self.cliente.id == "Auto") {
                //post
                $http
                    .post(config.url, json)
                    .then(onSuccess, self.onError);

                function onSuccess(resposta) {
                    self.clientes.push(resposta.data);
                    self.novoCliente();
                    self.mensagem("Cliente incluído c/ sucesso");
                }

            } else {
                $http
                    .put(config.url + "/" + self.cliente.id, json)
                    .then(onSuccess, self.onError);

                function onSuccess(resposta) {
                    var _cliente = self.obterCliente(resposta.data.id);
                    var _i = self.clientes.indexOf(_cliente);
                    self.clientes[_i] = resposta.data;
                    self.novoCliente();
                    self.mensagem("Cliente atualizado c/ sucesso");
                }
            }
        }

        this.editarCliente = function (cli) {
            //alert("editar " + angular.toJson(cli));
            self.cliente = { id: cli.id, nome: cli.nome, idade: cli.idade };

        }

        this.excluirCliente = function (cli) {
            //alert("excluir " + angular.toJson(cli));
            self.cliente = cli;
            $('#myModal').modal('show');
        }

        this.novoCliente = function () {
            self.cliente = { id: "Auto", nome: "", idade: "" };
            $("[name='nome']").focus();
        }

        this.cancelar = function () {
            self.novoCliente();
        }


        this.obterCliente = function (id) {
            var _cli = null;
            angular.forEach(self.clientes, function (cli) {
                if (cli.id == id) {
                    _cli = cli;
                }
            });

            return _cli;
        }

        this.confirmarExclusao = function (id) {
            $http
            .delete(config.url + "/" + id)
            .then(onSuccess, self.onError);

            function onSuccess(resposta) {
                var _cliente = self.obterCliente(resposta.data.id);
                var _i = self.clientes.indexOf(_cliente);
                self.clientes.splice(_i, 1);
                $("#myModal").modal("hide");
                self.novoCliente();
                self.mensagem("Cliente excluído c/ sucesso");
            }
        }

        obterClientes();

    }

}());