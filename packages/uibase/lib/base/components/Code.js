"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    '\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace;\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n'
  ],
  [
    '\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace;\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word;\n'
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

var Code = (exports.Code = _styledComponents2.default.code(_templateObject));
