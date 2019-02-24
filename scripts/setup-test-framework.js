import chai from 'chai';

global.jestExpect = global.expect;
global.expect = chai.expect;
global.fetch = require('jest-fetch-mock')
