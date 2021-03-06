"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = undefined;

var _templateObject = _taggedTemplateLiteral(
  ["\n  vertical-align: baseline;\n"],
  ["\n  vertical-align: baseline;\n"]
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

var Progress = (exports.Progress = _styledComponents2.default.progress(
  _templateObject
));
