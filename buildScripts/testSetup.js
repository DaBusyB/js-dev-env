//Register babel to transpile before the tests run
//tells Mocha that babel should transpile the tests before Mocha runs the tests
require('babel-register')();

//Disable webpack features that Mocha doesn't work with

//treat require.extentions['.css] like an empty function
require.extensions['.css'] = function() {};
