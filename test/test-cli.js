const shell = require('shelljs');
const tap = require('tap');

let ret = shell.exec("echo \"{\\\"a\\\":1}\" | script=\"console.log(JSON.parse(stdin).a)\" ./index.js").stdout;
tap.equal(ret,"1\n","value is 1");

