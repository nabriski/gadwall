#!/usr/bin/env node
const getStdin  = require("get-stdin");
const {NodeVM} = require('vm2');

getStdin().then(str => {

    const vm = new NodeVM({
        console: 'inherit',
        sandbox: {stdin:str}
    });

    vm.run(process.env.script);

});
