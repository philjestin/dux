import chai from 'chai';

global.expect = chai.expect;
global.jestExpect = jest.expect;
global.fetch = require('jest-fetch-mock')
