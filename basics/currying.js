/**
 * Created by Eugene on 8/16/16.
 */

'use strict';

const assert = require('assert');

describe('Curry Function', function () {
  it('Basic curry example', ()=> {

    var add =
      a =>
        b => {
          return a + b
        };


    assert.equal(add(1)(2), 3);
  });
});