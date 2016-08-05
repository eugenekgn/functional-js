(function () {
    'use strict';

    const _ = require('lodash');
    const chalk = require('chalk');

    const freinds = ['eugene', 'irina', 'igor'];

    //mapper 
    let nameMapper = (names) => {
        return _.map(names, (name) => {
            let cName = _.capitalize(name);
            return `Hello : ${cName}`;
        });
    };

    //each 
    let log = (name) => {
        console.log(chalk.magenta(name));     
    };

    //map each
    let mappedFreinds = nameMapper(freinds);
    _.each(mappedFreinds, log); 
})();