"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Summary = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  display: list-item;\n  cursor: pointer;\n"],
  ["\n  display: list-item;\n  cursor: pointer;\n"]
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

var Summary = (exports.Summary = _styledComponents2.default.summary(
  _templateObject
));
