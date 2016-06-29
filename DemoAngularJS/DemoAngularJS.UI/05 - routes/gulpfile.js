var gulp = require("gulp");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var jsvalidate = require("gulp-jsvalidate");
var concat = require("gulp-concat");


var paths = {
    css: {
        src: ["css/estilo.css", "lib/bootstrap/dist/css/bootstrap.css"],
        destino: "wwwroot/assets/css",
        arquivo:"styles-1.0.0.min.css"
    },

    scripts: {
        src: [
            "lib/angular/angular.js",
            "lib/angular-route/angular-route.js",
            "lib/jquery/dist/jquery.js",
            "lib/bootstrap/dist/js/bootstrap.js",
            "app/app.js",
            "app/routes.js",
            "app/controllers/home-controller.js",
            "app/controllers/about-controller.js",
            "app/controllers/contact-controller.js",
            "app/controllers/erro-controller.js"
        ],
        destino: "wwwroot/assets/js",
        arquivo: "scripts-1.0.0.min.js"
    }
};

gulp.task("css", function () {
    gulp
        .src(paths.css.src)
        .pipe(concat(paths.css.arquivo))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css.destino));
});


gulp.task("js", function () {
    gulp
        .src(paths.scripts.src)
        .pipe(jsvalidate())
        .pipe(concat(paths.scripts.arquivo))
        .pipe(uglify({mangle:false})) //mangle: é para injeção de dependências do angular
        .pipe(gulp.dest(paths.scripts.destino));
});

gulp.task("default",["css","js"]);