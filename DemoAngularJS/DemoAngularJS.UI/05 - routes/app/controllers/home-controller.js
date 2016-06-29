var HomeCtrl = (function () {
    function HomeCtrl($http) {
        this.$http = $http;
    }
    HomeCtrl.prototype.buscarCliente = function () {
        //this.$http.get("www.taggen.com.br/dados").then
    };
    HomeCtrl.$inject = ["$http"];
    return HomeCtrl;
}());
angular.module("app")
    .controller("homeController", HomeCtrl);
//# sourceMappingURL=home-controller.js.map