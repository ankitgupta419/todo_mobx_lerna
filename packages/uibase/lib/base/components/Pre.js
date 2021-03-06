"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pre = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    '\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n'
  ],
  [
    '\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  display: block;\n  font-size: 87.5%;\n  color: #212529;\n'
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

var Pre = (exports.Pre = _styledComponents2.default.pre(_templateObject));
