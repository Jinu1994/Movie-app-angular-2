"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_service_1 = require('./movie.service');
var MoviesListComponent = (function () {
    function MoviesListComponent(movieService) {
        this.movieService = movieService;
        this.title = "The List of movies";
    }
    MoviesListComponent.prototype.searchMovie = function () {
        var _this = this;
        this.movieService.getMovies(this.searchTitle).subscribe(function (movies) { return _this.movies = movies; });
    };
    MoviesListComponent = __decorate([
        core_1.Component({
            selector: "<movie-list></movie-list>",
            template: "\n    <div class='movie-list-container'>\n    <label > Enter Movie Title to search for:</label>\n     <input (input)=\"searchTitle=$event.target.value\"> <button (click)=\"searchMovie()\">Search</button>\n    <h2>{{title}}</h2>\n\n    <ul class=\"movies\"> \n        <li *ngFor=\"let movie of movies\">\n<span class=\"badge\"> {{movie.title}}</span>\n        </li>\n    </ul>\n    </div>\n    ",
            providers: [movie_service_1.MovieService],
            styles: [" .movies .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n      margin-bottom:10px;\n    }\n    .movie-list-container{\n      margin-top:10px;\n    }\n"]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], MoviesListComponent);
    return MoviesListComponent;
}());
exports.MoviesListComponent = MoviesListComponent;
//# sourceMappingURL=movies-list.component.js.map