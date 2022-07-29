"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var key = "01d7c8bb50e82be6d7373c74eee8b735";
var request = {
  requestPopular: "https://api.themoviedb.org/3/movie/popular?api_key=".concat(key, "&language=en-US&page=1"),
  requestTopRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(key, "&language=en-US&page=1"),
  requestTrending: "https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(key),
  requestHorror: "https://api.themoviedb.org/3/search/movie?api_key=".concat(key, "&query=horror&language=en-US&page=1&include_adult=false"),
  requestUpcoming: "https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(key, "&language=en-US&page=1")
};
var _default = request;
exports["default"] = _default;