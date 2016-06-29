class HomeCtrl {

    static $inject = ["$http"];

    constructor(public $http: ng.IHttpService) {
    }


    buscarCliente() {
        //this.$http.get("www.taggen.com.br/dados").then
    }
}

angular.module("app")
    .controller("homeController", HomeCtrl);
