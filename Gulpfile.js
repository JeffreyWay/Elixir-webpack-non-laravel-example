var elixir = require('laravel-elixir');

// This is a little helper package that
// pulls in a bunch of vue-loader stuff,
// and then hooks into Laravel Elixir.
require('laravel-elixir-vue');

elixir(function(mix) {
    mix.webpack('./src/app.js', './dist');
});