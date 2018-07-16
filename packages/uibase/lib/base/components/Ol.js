"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ol = undefined;

var _templateObject = _taggedTemplateLiteral(
  [
    "\n  margin-top: 0;\n  margin-bottom: 1rem;\n  & > ol {\n    margin-bottom: 0;\n  }\n  & > ul {\n    margin-bottom: 0;\n  }\n"
  ],
  [
    "\n  margin-top: 0;\n  margin-bottom: 1rem;\n  & > ol {\n    margin-bottom: 0;\n  }\n  & > ul {\n    margin-bottom: 0;\n  }\n"
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

var Ol = (exports.Ol = _styledComponents2.default.ol(_templateObject));
