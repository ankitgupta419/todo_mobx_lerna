"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kbd = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    '\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace;\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n  & > kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700;\n  }\n'
  ],
  [
    '\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n    "Courier New", monospace;\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem;\n  & > kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700;\n  }\n'
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

var Kbd = (exports.Kbd = _styledComponents2.default.kbd(_templateObject));
