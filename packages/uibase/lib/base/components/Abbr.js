"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Abbr = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n"
  ],
  [
    "\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n"
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

var Abbr = (exports.Abbr = _styledComponents2.default.abbr(_templateObject));
