"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  border-radius: 10px;\n  margin: 0 10px;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  overflow: visible;\n  text-transform: none;\n  &:focus {\n    outline: 1px dotted;\n  }\n  color: #fff;\n  background-color: #28a745;\n  background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);\n  height: 32px;\n  width: 70px;\n"
  ],
  [
    "\n  border-radius: 10px;\n  margin: 0 10px;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  overflow: visible;\n  text-transform: none;\n  &:focus {\n    outline: 1px dotted;\n  }\n  color: #fff;\n  background-color: #28a745;\n  background-image: linear-gradient(-180deg, #34d058 0%, #28a745 90%);\n  height: 32px;\n  width: 70px;\n"
  ]
);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  );
}

var Button = (exports.Button = _styledComponents2.default.button(
  _templateObject
));
