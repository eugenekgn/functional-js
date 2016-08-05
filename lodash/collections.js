(function () {
    'use strict';

    const _ = require('lodash');
    const chalk = require('chalk');

    const freinds = ['eugene', 'irina', 'igor'];


    let printHeader = (message) => {
        console.log(chalk.yellow(`*** ${message} ***`));
    };

    //each 
    let log = (message) => {
        console.log(chalk.magenta(message));
    };

    //mapping: transfering array into another array
    (function () {
        printHeader('Map');
        let mappedFreinds = _.map(freinds, (friend) => {
            return `Hello there ${friend}`;
        });
        _.each(mappedFreinds, log);
    })();
    
    //reduce: sum up all the values
    (function(){
        printHeader('reduce');
        let numbers = [1, 10, 100, 1000, 10000, 100000];
        let sum = _.reduce(numbers, (total, currentNumber)=>{
           return total + currentNumber; 
        });
        
        log(sum);
    })();
})();