"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Strong = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  font-weight: bolder;\n"],
  ["\n  font-weight: bolder;\n"]
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

var Strong = (exports.Strong = _styledComponents2.default.strong(
  _templateObject
));
