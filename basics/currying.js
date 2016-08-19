/**
 * Created by Eugene on 8/16/16.
 */

'use strict';

const expect = require('should');

describe('Curry Function (Basic Example)', function () {

  let addition = function (arg1) {
    return function (arg2) {
      return arg1 + arg2;
    }
  };

  it('basic addition', ()=> {
    (addition(1)(2)).should.equal(3);
  });

  it('deferred addition', ()=> {
    let addToTen = addition(10);

    console.log(addToTen);
    addToTen(10).should.equal(20);
  })


});

describe('Curry Function (Calculate Average)', function () {
  let calculareAvarage = function (...n) {
    let tonal = 0;

    for (let i = 0; i < n.length; i++) {
      tonal += n[i];
    }

    return tonal / n.length;
  };

  let dynamicAvarage = function (fn, ...n) {
    return function (...m) {
      return fn.apply(this, n.concat(m));
    }
  };

  it('Calculate dynamic average', ()=> {
    let calcAvg = dynamicAvarage(calculareAvarage, 1, 2, 3);
    calcAvg(4, 5, 6).should.equal(3.5);
  })
});