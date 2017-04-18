/**
 * Created by devworx on 4/18/17.
 */
/*
 This file is not transpiled so must use CommonJS and ES5 syntax
 Register babel to transpile before our tests run
 */
require('babel-register')()

/*
 Disable webpack features that Mocha doesn't understand. Mocha doesn't understand index.css
 that we imported into index.js
 */
require.extensions['.css'] = function () {}
