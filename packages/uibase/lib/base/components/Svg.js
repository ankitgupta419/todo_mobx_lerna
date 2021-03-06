"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Svg = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  &:not(:root) {\n    overflow: hidden;\n  }\n"],
  ["\n  &:not(:root) {\n    overflow: hidden;\n  }\n"]
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

var Svg = (exports.Svg = _styledComponents2.default.svg(_templateObject));
