"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  display: inline-block;\n  margin-bottom: 0.5rem;\n"],
  ["\n  display: inline-block;\n  margin-bottom: 0.5rem;\n"]
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

var Label = (exports.Label = _styledComponents2.default.label(_templateObject));
