import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
var sinon = require('sinon');
var assert = require('assert');
global.assert = assert;
global.sinon = sinon;