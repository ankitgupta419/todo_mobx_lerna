"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  border-collapse: collapse;\n"],
  ["\n  border-collapse: collapse;\n"]
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

var Table = (exports.Table = _styledComponents2.default.table(_templateObject));
