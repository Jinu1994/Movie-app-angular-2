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
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.getMoviesListUrl = "http://www.omdbapi.com/?";
    }
    MovieService.prototype.mapMovies = function (response) {
        var x = response.json();
        return x.Search.map(toMovie);
    };
    MovieService.prototype.mapMovie = function (response) {
        var x = response.json();
        return {
            id: x.Id,
            title: x.Title,
            year: x.Year,
            genre: x.Genre
        };
    };
    MovieService.prototype.getMovies = function (searchTitle) {
        var params = new http_1.URLSearchParams();
        params.set('s', searchTitle);
        var movies = this.http.get(this.getMoviesListUrl, { search: params })
            .map(this.mapMovies);
        return movies;
    };
    MovieService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
function toMovie(r) {
    var movie = ({
        title: r.Title,
        year: r.Year,
    });
    console.log('Parsed person:', movie);
    return movie;
}
//# sourceMappingURL=movie.service.js.map